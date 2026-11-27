import { useEffect, useState } from "react"
import { getComments } from "../api/commentsApi"
import { CommentData, CommentResponse } from "../types/comments"

const PAGE_SIZE = 10

export default function useComments(page: number) {
    const [comments, setComments] = useState<CommentData[]>([])
    const [total, setTotal] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
      const controller = new AbortController()

      async function load() {
        try {
          setLoading(true)
          setError(null)

          const response: CommentResponse = await getComments(page, PAGE_SIZE, controller.signal)
          
          setComments(response.comments)
          setTotal(response.total)

        } 
        
        catch (error: any) {
          if (error.name !== "AbortError") {
              setError("Не удалось загрузить комментарии")
          }

        }
        
        finally {

          if (!controller.signal.aborted)
             setLoading(false)
        }
      }

      void load()

      return () => {
        controller.abort()
        }
      },[page])

  return {comments, total, loading, error, pageSize: PAGE_SIZE}
}  
