import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

  const { refresh_token } = await request.json();
  if (!refresh_token) {
    return NextResponse.json(
      { error: "No refresh token available" },
      { status: 400 },
    );
  }

  try {
    const tokenUrl = "https://accounts.zoho.com/oauth/v2/token";
    const params = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: refresh_token,
    });

    const res = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to refresh token" },
        { status: 400 },
      );
    }
    cookies().set("zoho_access_token", data?.access_token, {
      expires: new Date(Date.now() + data?.expires_in * 1000),
    });

    const response = NextResponse.json({
      success: true,
      access_token: data.access_token,
    });

    return response;
  } catch (error) {
    console.error("Token refresh error:", error);
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 500 },
    );
  }
}