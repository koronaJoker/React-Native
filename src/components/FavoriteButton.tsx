import useFavorites from "@/hooks/useFavorites"
import { CommentData } from "@/types/comments"
import { Pressable, Text } from "react-native"

type Props = {
    comment: CommentData
}

export default function FavoriteButton({ comment } : Props) {

    const {
        addFavorite,
        isFavorite,
        removeFavorite,
    } = useFavorites()

    const favorite = isFavorite(comment.id)

    function handlePress() {
        if (favorite) {
            removeFavorite(comment.id)
        }
        else {
            addFavorite(comment)
        }
    }


    return (
        <Pressable onPress = {handlePress}>
            <Text>{favorite ? '♥' : '♡'}</Text>
        </Pressable>
    )
}