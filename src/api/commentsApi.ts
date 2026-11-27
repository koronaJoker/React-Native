import type { CommentData, CommentResponse } from "../types/comments"

const BASE_URL = 'https://dummyjson.com/comments'


export async function getComments(page: number,pageSize: number,signal?: AbortSignal): Promise<CommentResponse> {

    const skip = (page - 1) * pageSize

    const response = await fetch(`${BASE_URL}?limit=${pageSize}&skip=${skip}`, {signal})

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export async function getComment(id: number, signal?:AbortSignal):Promise<CommentData> {
    const response = await fetch(`${BASE_URL}/${id}`, {signal})

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}