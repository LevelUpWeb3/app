import { PrivyClient } from "@privy-io/server-auth";

const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID as string,
  process.env.NEXT_PUBLIC_PRIVY_APP_SECRET as string,
);

async function getUserFromToken(req) {
  try {
    const authToken = req.cookies.get("privy-token")?.value;
    if (!authToken) {
      throw new Error("No ID token found in cookies");
    }
    const verifiedClaims = await privy.verifyAuthToken(authToken);
    const user = await privy.getUserById(verifiedClaims.userId);
    return user;
  } catch (error) {
    console.error("Error validating ID token:", error);
    throw new Error("Invalid or expired token");
  }
}

export { getUserFromToken, privy };
