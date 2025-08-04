import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     // Destructure only allowed fields from body
//     const {
//       name,
//       specialty,
//       subSpecialty,
//       image,
//       rating,
//       reviews,
//       experience,
//       education,
//       languages,
//       about,
//       achievements,
//     } = body;

//     const doc = {
//       _type: "doctor",
//       name,
//       specialty,
//       subSpecialty,
//       image,
//       rating,
//       reviews,
//       experience,
//       education,
//       languages,
//       about,
//       achievements,
//     };

//     const result = await client.create(doc);
//     return NextResponse.json({ success: true, data: result });
//   } catch (error) {
//     console.error("Error adding doctor:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to add doctor" },
//       { status: 500 }
//     );
//   }
// }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      specialty,
      subSpecialty,
      image, // should be {_type: 'image', asset: { _ref: ... }}
      rating,
      reviews,
      experience,
      education,
      languages,
      about,
      achievements,
    } = body;

    const doc = {
      _type: "doctor",
      name,
      specialty,
      subSpecialty,
      image,
      rating,
      reviews,
      experience,
      education,
      languages,
      about,
      achievements,
    };

    const result = await client.create(doc);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error adding doctor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add doctor" },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  try {
    const result = await client.fetch(`*[_type == "doctor"]`);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error adding doctor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add doctor" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Missing doctor ID" },
      { status: 400 }
    );
  }

  try {
    await client.delete(id);
    return NextResponse.json({ success: true, message: "Doctor deleted" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete doctor" },
      { status: 500 }
    );
  }
}
