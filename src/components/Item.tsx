import { StyleSheet, Text, View } from "react-native";
import { Comment } from "../app/index";


export default function Item ({id, user, body, likes, postId}: Comment) {
    return (
        <View key = {id} style = {styles.comment}>
            <Text style = {styles.postId}>{postId}</Text>

            <Text style = {styles.username}>{user.fullName}</Text>

            <Text style = {styles.body}>{body}</Text>
            <View style = {styles.flex}>
                <Text style = {styles.date}>12.12.2026</Text>
                <Text style = {styles.likes}>{likes} likes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    comment : {
        position: "relative",
        height: 300,
        margin:20,
        justifyContent: "space-between",
        backgroundColor: "rgb(33,57,104)",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0px 0px 20px rgba(63,81,169, 0.3)"
    },
    username: {
        borderBottomWidth:2,
        borderColor: "#a8e1b4",
        fontWeight: 700,
        color: "#fff",
        fontSize: 18,
        paddingBottom: 10

    },

    likes: {
        fontWeight: 900,
        color: "#a8e1b4",
       
    },
    date: {
        fontWeight: 300,
        fontStyle: "italic",
        color: "#a7a6b8",
    },

    body : {
        padding: 10,
        fontWeight: 200,
        color: "#fff",
        backgroundColor: "rgb(56, 70, 120)",
        height: "50%",
        borderRadius: 5
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    postId: {
        position: "absolute",
        right: 15,
        top: 15,
        fontSize: 9,
        color: "#c3f9d8"
    }


})