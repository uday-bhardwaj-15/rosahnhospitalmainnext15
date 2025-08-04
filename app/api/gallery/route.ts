import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

export async function POST(req: NextRequest) {
  try {
    const { title, category, imageDataUrl } = await req.json();

    if (!title || !category || !imageDataUrl) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Convert base64 DataURL to buffer
    const matches = imageDataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!matches) {
      return NextResponse.json(
        { success: false, error: "Invalid image format" },
        { status: 400 }
      );
    }

    const mimeType = matches[1]; // like 'image/png'
    const imageBuffer = Buffer.from(matches[2], "base64");

    // Upload to Sanity
    const asset = await client.assets.upload("image", imageBuffer, {
      filename: `${title.replace(/\s+/g, "_")}.${mimeType.split("/")[1]}`,
      contentType: mimeType,
    });

    // Create gallery entry
    const doc = {
      _type: "gallery",
      title,
      category,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
    };

    const result = await client.create(doc);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload to Sanity" },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  try {
    const result = await client.fetch(`*[_type == "gallery"]`);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error adding gallery:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add gallery" },
      { status: 500 }
    );
  }
}
