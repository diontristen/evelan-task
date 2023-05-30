import { UserResponse } from "@/types/user"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getUsers } from "@/services/users"

export const useUsers = (page: number) => {
    const queryClient = useQueryClient()
    return useQuery<UserResponse, Error>(['users', page], () => getUsers(page), {
        onSuccess: (data: UserResponse) => {
            const { users: newUsers } = data;
            const prevData = queryClient.getQueryData<UserResponse>(['users', page - 1]);
            const updatedData = {
                ...data,
                users: prevData?.users ? [...prevData.users, ...newUsers] : newUsers,
            };
            queryClient?.setQueryData(['users', page], updatedData);
        },
        keepPreviousData: true
    });
};