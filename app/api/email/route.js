import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/config/models/EmailModel";
import { NextResponse } from "next/server";


const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();
  

// API Endpoint for uploading email data into database
export async function POST(request) {
    await ConnectDB();
    try {
        const formData = await request.formData();

        const emailData = { 
          email: `${formData.get("email")}`,
         };

        await EmailModel.create(emailData);
        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (error) {
        console.error("Error saving email:", error);
        return NextResponse.json({ msg: "Error saving email", error: error.message }, { status: 500 });
    }
}

// API Endpoint for fetching all emails
export async function GET(request) {
  await ConnectDB();
  try {
    const emails = await EmailModel.find({});
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return NextResponse.json({ msg: "Error fetching emails" }, { status: 500 });
  }
}

// API Endpoint to delete a specific email
export async function DELETE(request) {
  await ConnectDB();
  try {
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email Deleted" });
  } catch (error) {
    console.error("Error deleting email:", error);
    return NextResponse.json({ msg: "Error deleting email" }, { status: 500 });
  }
}
