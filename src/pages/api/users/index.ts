import { UserApiResponse, UserResponse } from "@/types/user";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface GetUserRequest extends NextApiRequest {
    query: {
        page: string;
    }
}

export default async function userHandler(req: GetUserRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            await getUsers(req, res)
            break;
        default:
            res.status(405).end(); //Method Not Allowed
            break;
    }
}


const getUsers = async (
    req: GetUserRequest,
    res: NextApiResponse
) => {
    try {
        const page = Number(req.query?.page) ?? 1
        const result = await axios.get(`https://reqres.in/api/users?page=${page}`)
        const {
            total_pages,
            data: users
        }: UserApiResponse = result.data
        const data: UserResponse = {
            total_pages,
            users,
            page: page
        }
        res.status(200).json(data)
    } catch (error: unknown) {
        let errorMessage: string = 'Failed to fetch data'
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        res.status(500).json({ error: errorMessage })
    }
}