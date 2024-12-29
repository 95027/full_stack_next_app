import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const contacts = await Contact.find();
    return NextResponse.json({
      message: "contacts fetched successfully",
      contacts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async () => {};
