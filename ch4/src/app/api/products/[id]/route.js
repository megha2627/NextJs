import { NextResponse } from "next/server";

export const GET = async (req,context) => {
    console.log(req);
    console.log("context",context.params.id);
    return NextResponse.json({ "msg from next js api route:": "Hello next js api route" });
}