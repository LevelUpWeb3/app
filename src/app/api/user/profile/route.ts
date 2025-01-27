import { isString } from "@thi.ng/checks";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getUserFromToken, privy } from "@/app/api/utils/auth";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

/**
 * Validates the username.
 * @param {string} username
 */
function validateUsername(username) {
  if (!isString(username) || username.trim().length === 0) {
    throw new Error("Invalid username: must be a non-empty string.");
  }
}

/**
 * Validates the uploaded image file.
 * @param {File} image
 */
function validateImage(image) {
  const allowedTypePattern = /^image\/(png|jpeg|webp)$/;

  if (!allowedTypePattern.test(image.type)) {
    throw new Error(`Invalid image type. Allowed types are: PNG, JPEG, WEBP.`);
  }
  if (image.size > MAX_IMAGE_SIZE) {
    throw new Error(`Image size exceeds the limit of ${MAX_IMAGE_SIZE} bytes.`);
  }
}

/**
 * Uploads the avatar image to the server.
 * @param {File} image
 * @returns {Promise<string>} The URL of the uploaded image.
 */
async function uploadImage(image) {
  const imageExt = image.type.split("/").pop();
  const response = await put(`/profile/avatar.${imageExt}`, image, {
    contentType: image.type,
    access: "public",
    addRandomSuffix: true,
  });

  if (!response.url) {
    throw new Error("Failed to upload avatar.");
  }

  return response.url;
}

/**
 * Handles the POST request to update user profile.
 * @param {Request} req
 */
export async function POST(req) {
  try {
    const { customMetadata, id: uid } = await getUserFromToken(req);
    if (!uid) {
      return new Response("Unauthorized: User not authenticated.", {
        status: 401,
      });
    }

    let form;
    try {
      form = await req.formData();
    } catch (err) {
      console.error("Failed to parse request form:", err);
      return new Response("Failed to parse request form.", { status: 400 });
    }

    const username = form.get("username");
    const image = form.get("avatar");
    const avatarUrlInput = form.get("avatarUrl");

    validateUsername(username);

    let avatarUrl: null | string = null;
    if (image) {
      validateImage(image);
      avatarUrl = await uploadImage(image);
    } else if (avatarUrlInput) {
      if (!isString(avatarUrlInput) || !avatarUrlInput.startsWith("http")) {
        throw new Error("Invalid avatar URL: must start with http/https.");
      }
      avatarUrl = avatarUrlInput;
    }

    const userProfileData = {
      username,
      ...(avatarUrl && { avatar: avatarUrl }),
    };

    await privy.setCustomMetadata(uid, {
      ...customMetadata,
      ...userProfileData,
    });

    return NextResponse.json({
      success: true,
      ...customMetadata,
      ...userProfileData,
    });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
