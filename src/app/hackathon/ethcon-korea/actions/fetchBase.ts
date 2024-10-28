export default async function fetchBase<T>(
  session: string | undefined,
  session2: string | undefined,
  uri: string,
  options?: {
    method?: string;
    body?: string;
  },
): Promise<T> {
  const headers = {
    "Content-Type":
      options?.method !== "GET" ? "application/json" : "text/plain",
  };

  if (session) headers["Ethcon"] = session;
  if (session2) headers["Ethcon2"] = session2;

  const response = await fetch(`https://test.onchain.kr${uri}`, {
    headers,
    ...options,
  });

  if (response.ok) return await response.json();

  throw Error(`API Request failed(${response.status})`);
}
