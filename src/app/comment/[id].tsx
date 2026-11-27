import CommentItem from "@/components/CommentItem";
import useComment from "@/hooks/useComment";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export default function CommentDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const parsedId = Number(id)
    const commentId = Number.isFinite(parsedId) ? parsedId : null

    const {comment, loading, error} = useComment(commentId)
    

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
            {/* <Stack.Screen options={{ title: comment.body }} /> */}
            <CommentItem
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
