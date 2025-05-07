import { NextResponse } from "next/server";

export async function GET(request) {
    const reqHeaders = new Headers(request.headers);
    //console.log(reqHeaders);
    const { searchParams } = new URL(request.url);
    //console.log(searchParams);
    //console.log(searchParams.get("search"))

    //cokies in next-js
    const cookies1 = request.cookies;
    console.log("cookiee",cookies1);
    return NextResponse.json({ "msg from next js api route:": "Hello next js api route"});
}