// import { NextRequest, NextResponse } from "next/server";
// import { client } from "@/lib/client";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;

//     if (!file) {
//       return NextResponse.json(
//         { success: false, error: "No file uploaded" },
//         { status: 400 }
//       );
//     }

//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     const asset = await client.assets.upload("image", buffer, {
//       filename: file.name,
//       contentType: file.type,
//     });

//     return NextResponse.json({ success: true, url: asset.url, asset });
//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json(
//       { success: false, error: "Upload failed" },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const asset = await client.assets.upload("image", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    return NextResponse.json({ success: true, url: asset.url, asset });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}
