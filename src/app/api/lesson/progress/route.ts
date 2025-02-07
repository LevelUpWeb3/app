import { getUserFromToken, privy } from "@/app/api/utils/auth";

export async function POST(req) {
  try {
    const { lessonId, step } = await req.json();
    if (!lessonId || typeof lessonId !== "string" || step == null) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing lessonId or step" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const { customMetadata, id: uid } = await getUserFromToken(req);
    if (!uid) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Invalid token" }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      );
    }

    let lessonsData = {};
    try {
      lessonsData = JSON.parse((customMetadata?.lessons as string) || "{}");
    } catch (e) {
      console.error("Failed to parse lessons metadata:", e);
      return new Response(
        JSON.stringify({ error: "Invalid lessons metadata format" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    lessonsData[lessonId] = step;

    try {
      await privy.setCustomMetadata(uid, {
        ...customMetadata,
        lessons: JSON.stringify(lessonsData),
      });
    } catch (e) {
      console.error("Failed to set custom metadata:", e);
      return new Response(
        JSON.stringify({ error: "Failed to update custom metadata" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error in POST:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
