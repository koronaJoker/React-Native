import { useRouter } from "expo-router";
import { useEffect, useState } from 'react';

import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Comment, CommentResponse } from '@/types/types';

import ErrorData from "@/components/ui/ErrorData";
import Header from "../../components/Header";
import Items from "../../components/Items";
import Pagination from "../../components/Pagination";




let PAGE_SIZE = 5

const delay = 0

export default function HomeScreen() {

  const router = useRouter()

  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [search, setSearch] = useState<string>('');

  const totalPages = Math.ceil(total/PAGE_SIZE)  

  const skip = (currentPage-1) * PAGE_SIZE

  const url = `https://dummyjson.com/comments?limit=${PAGE_SIZE}&skip=${skip}&delay=${delay}`


  useEffect (()=> {
    const controller = new AbortController();

    async function loadCommentsData() {

      setLoading(true)
      setError(null)

      try {
        //const skip = (currentPage-1) * PAGE_SIZE
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


  const filteredComments = comments.filter(comment =>
    comment.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView edges = {["top"]} style = {styles.container}>
      <Header/>

    <Pressable
      style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed
      ]}
      onPress={() => router.push('/add-modal')}
  >
      <Text style={styles.buttonText}>+ Add Comment</Text>
  </Pressable>


      {
        error
          ? (<ErrorData/>)
          : (<Items comments = {filteredComments}/>) 

      }

      <TextInput
        style={styles.searchInput}
        placeholder="Search comments..."
        value={search}
        onChangeText={setSearch}
      />
    

      <Pagination loading = {loading} currentPage={currentPage} setCurrentPage = {setCurrentPage} totalPages = {totalPages}/>

    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },

    addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignSelf: 'center',
        marginVertical: 15,

        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    buttonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.97 }],
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

  searchInput: {
  height: 48,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  paddingHorizontal: 14,
  marginHorizontal: 16,
  marginBottom: 15,
  fontSize: 16,
  backgroundColor: '#fff',
},
});


