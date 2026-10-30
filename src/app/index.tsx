import { useEffect, useState } from 'react';

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import LoadingData from '@/components/ui/LoadingData';
import Header from "../components/Header";
import Items from "../components/Items";
import Pagination from "../components/Pagination";
import EmptyData from '../components/ui/EmptyData';
import ErrorData from '../components/ui/ErrorData';

type  CommentUser = {
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


let PAGE_SIZE = 10

const delay = 1201

export default function HomeScreen() {


  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)


  const totalPages = Math.ceil(total/PAGE_SIZE)  

  const skip = (currentPage-1) * PAGE_SIZE

  const url = `https://dummyjson.com/comments?limit=${PAGE_SIZE}&skip=${skip}&delay=${delay}`


  useEffect (()=> {
    const controller = new AbortController();

    async function loadCommentsData() {

      setLoading(true)
      setError(null)

      try {
        const skip = (currentPage-1) * PAGE_SIZE
        const response = await fetch(url,{signal: controller.signal})

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data: CommentResponse = await response.json()

        setComments(data.comments)
        setTotal(data.total)
      }

      catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return
        }
      
        setError("Упс, не удалось загрузить CommentResponse")
      }

      finally {
        setLoading(false)
      }

    }
    loadCommentsData()

    return () => controller.abort()

  },[currentPage]) 


  return (
    <SafeAreaView style = {styles.container}>
      <Header/>

    { loading ?
      (<LoadingData/>) : error ? (
    <ErrorData/> 
  ) : (comments.length === 0 || PAGE_SIZE === 0) ? (<EmptyData/>) : (
        <Items comments = {comments}/>)}

      <Pagination loading = {loading} currentPage={currentPage} setCurrentPage = {setCurrentPage} totalPages = {totalPages}/>
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#8bd89c",
  }

})