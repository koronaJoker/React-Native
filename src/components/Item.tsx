import { Comment } from "@/types/types";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";


export default function Item ({id, user, body, likes, postId}: Comment) {

    const {width} = useWindowDimensions()

     const commentWidth = width > 768 ? width * 0.85 : width * 0.95;


    return (
        <View style={[styles.comment, {width: commentWidth}]}>
          <Text style={styles.postId}>{postId}</Text>

          <Text style={styles.username}>{user.fullName}</Text>

          <Text style={styles.body}>{body}</Text>

          <View style={styles.flex}>
              <Text style={styles.date}>12.12.2026</Text>
              <Text style={styles.likes}>{likes} likes</Text>
          </View>

        </View>
    
    )
}

const styles = StyleSheet.create({

  comment: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    minHeight: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0px 0px 10px rgba(0,0,0, 0.2)",
  },

  username: {
    borderBottomWidth: 2,
    borderColor: "#000",
    fontWeight: "700",
    color: "#000",
    fontSize: 18,
    paddingBottom: 10,
  },

  likes: {
    fontWeight: "900",
    color: "#000",
  },

  date: {
    fontWeight: "300",
    fontStyle: "italic",
    color: "#a7a6b8",
  },

  body: {
    padding: 10,
    fontWeight: "200",
    color: "#000",
    // backgroundColor: "rgb(56, 70, 120)",
    minHeight: 150,
    borderRadius: 5,
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  postId: {
    position: "absolute",
    right: 15,
    top: 15,
    fontSize: 9,
    color: "#fff",
  },
})