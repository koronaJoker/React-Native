
import FavoriteButton from "@/components/buttons/FavoriteButton";
import type { CommentData } from "@/types/comments";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native";

type Props = {
    comment: CommentData;
    onLike?: () => void;
};

export default function CommentItem({ comment, onLike }: Props) {
    const { width } = useWindowDimensions();

    const commentWidth = width > 768 ? width * 0.85 : width * 0.95;

    return (
        <View style={[styles.comment, { width: commentWidth }]}>

            <View style={styles.header}>
                <Text style={styles.postId}>
                    Post #{comment.postId}
                </Text>

                <FavoriteButton comment={comment} />
            </View>

            <Text style={styles.username}>
                {comment.user.fullName}
            </Text>

            <Text style={styles.body}>
                {comment.body}
            </Text>

            <View style={styles.flex}>
                <Text style={styles.date}>
                    12.12.2026
                </Text>

                {onLike ? (
                    <Pressable
                        onPress={onLike}
                        style={({ pressed }) => [
                            styles.likeButton,
                            pressed && styles.likeButtonPressed
                        ]}
                    >
                        <Text style={styles.likes}>
                            ♥ {comment.likes} likes
                        </Text>
                    </Pressable>
                ) : (
                    <Text style={styles.likes}>
                        {comment.likes} likes
                    </Text>
                )}
            </View>

        </View>
    );
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

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
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
        color: "#ef4444",
    },

    likeButton: {
        padding: 5,
    },

    likeButtonPressed: {
        opacity: 0.6,
        transform: [{ scale: 0.95 }],
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
        minHeight: 150,
        borderRadius: 5,
    },

    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    postId: {
        fontSize: 12,
        color: "#888",
    },
});
