export type CommentUser = {
    id: number,
    username: string,
    fullName: string
}

export type CommentData = {
    id: number,
    body: string,
    postId?: number,
    likes: number,
    user: CommentUser
}

export type CommentResponse = {
    comments: Array<CommentData>
    total: number,
    skip: number,
    limit: number
}
