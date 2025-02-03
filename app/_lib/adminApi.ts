import { getAdminToken } from "./getAdminToken";


export async function adminApi<T>(
  endpoint: string,
  options: RequestInit = {},
  queryParams?: URLSearchParams,
): Promise<T> {
  const isFormData = options.body instanceof FormData;
  const adminToken = getAdminToken();

  const headers: HeadersInit = isFormData
    ? { ...(options.headers || {}) }
    : {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      };

  const config = {
    ...options,
    headers: {
      ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : {}),
      ...headers,
    },
  };

  if (queryParams) {
    const searchParams = new URLSearchParams(queryParams);
    endpoint += `?${searchParams.toString()}`;
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
    config,
  );

  if (!response.ok) {
    const error = await response.json();

    if (response.status === 401) {
      document.cookie = "authToken=;";
      location.replace("/admin/login");
    }
    throw new Error(error.message || "An error occurred!");
  }

  return response.json();
}