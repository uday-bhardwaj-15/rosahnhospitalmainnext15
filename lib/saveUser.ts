import { client } from "./client";

export async function saveUserToSanity(user: {
  email: string;
  fullName: string;
  image?: string;
  isAdmin?: boolean;
}) {
  const existing = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email: user.email }
  );

  if (!existing) {
    await client.create({
      _type: "user",
      fullName: user.fullName,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin || false,
    });
  }
}
