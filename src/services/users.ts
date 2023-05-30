import axios from '../config/axiosConfig'
import { UserResponse } from "@/types/user"

export const getUsers = async (page: number): Promise<UserResponse> => {
    try {
        const result = await axios.get(`/users?page=${page}`)
        const {
            total_pages,
            users
        }: UserResponse = result.data
        const data: UserResponse = {
            total_pages,
            users,
            page
        }
        return data
    } catch (error: unknown) {
        let errorMessage: string = 'Failed to fetch data'
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        throw new Error(errorMessage)
    }
}