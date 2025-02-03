import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useCustomMutation = <TData, TVariables>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: UseMutationOptions<TData, Error, TVariables>,
) => {

    return useMutation<TData, Error, TVariables>({
        mutationFn,
        ...options,
        onError: (error: any) => {
            if (error?.status === 401) {
            }
            

            if (options?.onError) {
                options.onError(error, {} as TVariables, null);
            }
        },
    });
};
export default useCustomMutation;
