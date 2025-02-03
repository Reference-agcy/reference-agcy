import { getCookie } from "cookies-next";
import { getAccessToken } from "./getAccessToken";
import { JobsResponse } from "@/@types/jobs";

export const getJobs = async (queryParam: string): Promise<JobsResponse> => {
  const token = await getAccessToken((name: string) => getCookie(name));

  // Ensure proper query parameter formatting
  const formattedQuery = queryParam?.startsWith("?")
    ? queryParam.slice(1)
    : queryParam;

  // Construct the API URL with filters
  const apiUrl = new URL(`https://recruit.zoho.com/recruit/v2/Job_Openings`);

  // Add query parameters
  apiUrl.search = formattedQuery
    ? `${formattedQuery}&fields=Job_Description,Required_Skills,id,Posting_Title`
    : "fields=Job_Description,Required_Skills,id,Posting_Title";

  // Use local API route instead of direct Zoho API call
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs${apiUrl.search}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res?.json();
  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch jobs");
  }

  console.log(data);
  return {
    ...data,
    token,
  };
};
