export type CommentUser = {
    id: number,
    username: string,
    fullName: string
}

export type Comment = {
    id: number,
    body: string,
    postId?: number,
    likes: number,
    user: CommentUser
}

export type CommentResponse = {
    comments: Array<Comment>
    total: number,
    skip: number,
    limit: number
}
