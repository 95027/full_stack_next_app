import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ name: "sai" });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async () => {
    
}
