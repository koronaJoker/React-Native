import Item from "@/components/Item";
import { Comment } from "@/types/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';



export default function CommentDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();

    
    const [comment, setComment] = useState<Comment | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect (()=> {

    const controller = new AbortController();

    async function loadCommentData() {

      try {
        const response = await fetch(`https://dummyjson.com/comments/${id}`,{signal: controller.signal})

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data: Comment = await response.json()

        setComment(data)
      }

      catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return
        }
      
        setError("Упс, не удалось загрузить Comment")
      }

      finally {
        setLoading(false)
      }

    }
    loadCommentData()

    return () => controller.abort()

  }, [id])

    if (loading) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
  }

  if (error) {
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "red" }}>{error}</Text>
          </View>
      );
  }

  if (!comment) {
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>Комментарий не найден</Text>
          </View>
      );
  }

    return (
        <View style = {styles.container}>
            <Item
                id = {Number(comment.id)}
                user={comment.user}
                body = {comment.body}
                likes = {comment.likes}
                postId={comment.postId}
            />
        </View>
    )

}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },


})
