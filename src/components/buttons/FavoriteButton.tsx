import { useFavoritesContext } from "@/context/FavoritesContext";
import type { CommentData } from "@/types/comments";
import { Pressable, Text } from "react-native";

type Props = {
    comment: CommentData;
};

export default function FavoriteButton({ comment }: Props) {
    const {
        addFavorite,
        isFavorite,
        removeFavorite,
    } = useFavoritesContext();

    const favorite = isFavorite(comment.id);

    async function handlePress() {
        if (favorite) {
            await removeFavorite(comment.id);
        } else {
            await addFavorite(comment);
        }
    }

    return (
        <Pressable onPress={handlePress}>
            <Text>{favorite ? "♥" : "♡"}</Text>
        </Pressable>
    );
}