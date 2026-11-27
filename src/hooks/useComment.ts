import { useEffect, useState } from "react";
import { getComment } from "../api/commentsApi";
import { CommentData } from "../types/comments";

const PAGE_SIZE = 10

export default function useComment(id: number | null) {
    const [comment, setComment] = useState<CommentData | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
      const controller = new AbortController()

      async function load() {
        try {
          setLoading(true)
          setError(null)

          const response: CommentData = await getComment(id, controller.signal)
          
          setComment(response)
          
        } 
        
        catch (error: any) {
          if (error.name !== "AbortError")
              setError("Не удалось загрузить комментарий")
        }
        
        finally {
          if (!controller.signal.aborted)
             setLoading(false)
        }
      }

      void load()

      return () => { controller.abort()}
      },[id])

  return {comment, loading, error}
}  
