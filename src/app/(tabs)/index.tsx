import { useRouter } from "expo-router";
import { useState } from 'react';

import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import ErrorData from "@/components/ui/ErrorData";
import useComments from "@/hooks/useComments";
import CommentList from "../../components/CommentList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

export default function HomeScreen() {
  const [page, setPage] = useState<number>(1)

  const { comments, loading, error, total, pageSize } = useComments(page)
  const [search, setSearch] = useState('');

  const totalPages = Math.ceil(total / pageSize)

  const router = useRouter()

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
          : (<CommentList comments = {filteredComments}/>) 

      }

      <TextInput
        style={styles.searchInput}
        placeholder="Search comments..."
        value={search}
        onChangeText={setSearch}
      />
    

      <Pagination 
        loading = {loading}
        page={page}
        onPrevious = {() => setPage(prev =>Math.max(1, prev-1))}
        onNext = {() => setPage(prev => prev + 1)}
        totalPages = {totalPages}/>

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


