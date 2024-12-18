import { getUserFromToken, privy } from "@/app/api/utils/auth";

export async function POST(req) {
  try {
    const { challengeId } = await req.json();
    if (!challengeId || typeof challengeId !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid or missing challengeId" }),
        { status: 400 },
      );
    }

    const { customMetadata, id: uid } = await getUserFromToken(req);
    if (!uid) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Invalid token" }),
        { status: 401 },
      );
    }

    let challengesData = {};
    try {
      challengesData = JSON.parse(
        (customMetadata?.challenges as string) || "{}",
      );
    } catch (e) {
      console.error("Failed to parse challenges:", e);
      return new Response(
        JSON.stringify({ error: "Invalid challenges metadata format" }),
        { status: 500 },
      );
    }

    challengesData[challengeId] = true;

    try {
      await privy.setCustomMetadata(uid, {
        ...customMetadata,
        challenges: JSON.stringify(challengesData),
      });
    } catch (e) {
      console.error("Failed to set custom metadata:", e);
      return new Response(
        JSON.stringify({ error: "Failed to update custom metadata" }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: err.message }),
      { status: 500 },
    );
  }
}
