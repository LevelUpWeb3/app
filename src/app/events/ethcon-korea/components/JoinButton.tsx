import { Score } from "@/app/events/ethcon-korea/components";
import { SessionContext } from "@/app/events/ethcon-korea/config";
import Button from "@/components/Button";
import { useRainbowContext } from "@/contexts/RainbowProvider";
import { useCallback, useContext, useEffect } from "react";
import { useAccount, useWalletClient } from "wagmi";

function generateNonce() {
  return new Array(32)
    .fill(0)
    .map(() =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("");
}

// a simpler version of createSiweMessage
function createSiweMessage(parameters) {
  const {
    chainId,
    domain,
    expirationTime,
    issuedAt = new Date(),
    nonce,
    notBefore,
    requestId,
    resources,
    scheme,
    uri,
    version,
    address,
  } = parameters;

  // Construct message
  const origin = (() => {
    if (scheme) return `${scheme}://${domain}`;
    return domain;
  })();
  const statement = (() => {
    if (!parameters.statement) return "";
    return `${parameters.statement}\n`;
  })();
  const prefix = `${origin} wants you to sign in with your Ethereum account:\n${address}\n\n${statement}`;

  let suffix = `URI: ${uri}\nVersion: ${version}\nChain ID: ${chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt.toISOString()}`;

  if (expirationTime)
    suffix += `\nExpiration Time: ${expirationTime.toISOString()}`;
  if (notBefore) suffix += `\nNot Before: ${notBefore.toISOString()}`;
  if (requestId) suffix += `\nRequest ID: ${requestId}`;
  if (resources) {
    let content = "\nResources:";
    for (const resource of resources) {
      content += `\n- ${resource}`;
    }
    suffix += content;
  }

  return `${prefix}\n${suffix}`;
}

export default function JoinButton() {
  const { connect } = useRainbowContext();
  const { isConnected, address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { sessions, setSessions } = useContext(SessionContext);

  const getSiweMessage = useCallback(
    () =>
      createSiweMessage({
        address: address,
        chainId: 1,
        domain: "test.onchain.kr",
        nonce: generateNonce(),
        uri: "https://test.onchain.kr",
        version: "1",
      }),
    [address],
  );

  const login = useCallback(() => {
    if (!walletClient) return () => {};

    fetch("https://test.onchain.kr/connect")
      .then((res) => {
        const cookie = res.headers.get("ethcon");
        const nonce = res.headers.get("ethcon2");
        if (cookie && nonce) {
          const message = getSiweMessage();

          walletClient
            .signMessage({
              message,
            })
            .then((signature) => {
              fetch("https://test.onchain.kr/connect?next=/challenges", {
                method: "POST",
                headers: {
                  Ethcon: cookie,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                  name: message,
                  password: signature,
                  nonce,
                }),
              }).then(async (res) => {
                if (res.ok) {
                  const result = await res.json();
                  if (result.status === "success") {
                    const loginSession = res.headers.get("ethcon");
                    const csrfToken = res.headers.get("ethcon2");
                    if (loginSession && csrfToken) {
                      window.sessionStorage.setItem("session", loginSession);
                      window.sessionStorage.setItem("session2", csrfToken);
                      window.sessionStorage.setItem(
                        "address",
                        walletClient?.account.address,
                      );
                      setSessions({
                        address: walletClient?.account.address,
                        session: loginSession,
                        session2: csrfToken,
                      });
                    } else throw Error("No cookies received from server");
                  }
                } else {
                  throw Error("Login request failed");
                }
              });
            })
            .catch((e) => {
              if (e.name !== "UserRejectedRequestError")
                throw Error("Failed to sign message");
            });
        } else {
          throw Error("Failed to get csrfNonce");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [walletClient, getSiweMessage, setSessions]);

  useEffect(() => {
    const session = window.sessionStorage.getItem("session");
    const session2 = window.sessionStorage.getItem("session2");
    const sessionAddress = window.sessionStorage.getItem("address");
    if (session && session2 && sessionAddress) {
      setSessions({
        address: sessionAddress,
        session: session,
        session2: session2,
      });
    }
  }, [setSessions]);

  useEffect(() => {
    if (!isConnected) return;

    const sessionAddress = window.sessionStorage.getItem("address");
    if (address !== sessionAddress) {
      window.sessionStorage.removeItem("session");
      window.sessionStorage.removeItem("session2");
      window.sessionStorage.removeItem("address");
      setSessions({
        address: undefined,
        session: undefined,
        session2: undefined,
      });
    }
  }, [isConnected, address, setSessions]);

  if (isConnected && sessions?.session)
    return <Score session={sessions?.session} />;

  return (
    <Button
      href=""
      sx={{ width: "50% !important" }}
      onClick={isConnected ? login : connect}
    >
      {isConnected ? "Join" : "Connect Wallet"}
    </Button>
  );
}
