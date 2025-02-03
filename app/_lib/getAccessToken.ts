export async function getAccessToken(
  getCookieFunction: (name: string) => string | boolean | null | undefined,
) {
  const storedToken = getCookieFunction("zoho_access_token");
  const refreshToken = getCookieFunction("zoho_refresh_token");
  if (storedToken) return storedToken;
  if (!storedToken && refreshToken) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ refresh_token: refreshToken }),
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            revalidate: 3600, // because the token expires in 1 hour
          },
        },
      );
      const data = await response.json();

      return data?.access_token;
    } catch (error: unknown) {
      console.log(
        "error whilte refresh",
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  }
}
