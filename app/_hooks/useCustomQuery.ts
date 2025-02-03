import { QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCustomQuery<TResponse>(
  key: QueryKey,
  queryFn: (key: { [k: string]: unknown }) => Promise<TResponse>,
  options?: any,
) {
  const queryClient = useQueryClient();
  const queryResult = useQuery<TResponse, Error>({
    queryKey: key,
    queryFn: () => queryFn({ test: "test" }), // Pass the key object here

    ...options,
  });

  if (queryResult.error && (queryResult.error as any)?.status === 401) {
    queryClient.clear();
    toast.error(queryResult.error.message);
  }
  if (queryResult.error && (queryResult.error as any)?.status === 403) {
    toast.error(queryResult.error.message);
  }

  return queryResult;
}
