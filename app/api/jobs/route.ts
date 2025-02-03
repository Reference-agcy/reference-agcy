import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  const apiUrl = new URL("https://recruit.zoho.com/recruit/v2/Job_Openings");
  // const apiUrl = new URL("https://recruit.zoho.com/recruit/v2/Job_Openings");
  apiUrl.search = searchParams.toString();

  try {
    const response = await fetch(apiUrl.toString(), {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);
    if (!response.ok) {
      return NextResponse.json(
        { message: data?.message || "Failed to fetch jobs" },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to fetch jobs: ${errorMessage}` },
      { status: 500 },
    );
  }
}
