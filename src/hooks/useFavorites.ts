import type { CommentData } from "@/types/comments";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export default function useFavorites() {
    const db = useSQLiteContext();

    const [favorites, setFavorites] = useState<CommentData[]>([]);
    const [loading, setLoading] = useState(true);

    async function loadFavorites() {
        const rows = await db.getAllAsync<{
            id: number;
            body: string;
            postId: number | null;
            likes: number;
            userId: number;
            username: string;
            fullName: string;
        }>(
            "SELECT * FROM favorites ORDER BY id DESC"
        );

        const comments: CommentData[] = rows.map(row => ({
            id: row.id,
            body: row.body,
            postId: row.postId ?? undefined,
            likes: row.likes,
            user: {
                id: row.userId,
                username: row.username,
                fullName: row.fullName
            }
        }));

        setFavorites(comments);
    }

    useEffect(() => {
        void loadFavorites().finally(() => setLoading(false));
    }, []);

    async function addFavorite(comment: CommentData) {
        const { id, body, postId, likes, user } = comment;

        await db.runAsync(
            `INSERT OR IGNORE INTO favorites
            (id, body, postId, likes, userId, username, fullName)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                id, body, postId ?? null, likes,
                user.id, user.username, user.fullName
            ]
        );

        await loadFavorites();
    }

    async function removeFavorite(id: number) {
        await db.runAsync(
            "DELETE FROM favorites WHERE id = ?",
            [id]
        );

        await loadFavorites();
    }

    async function clearFavorites() {
        await db.runAsync("DELETE FROM favorites");

        await loadFavorites();
    }

    function isFavorite(id: number): boolean {
        return favorites.some(item => item.id === id);
    }

    async function putLike(id: number) {
        await db.runAsync(
            "UPDATE favorites SET likes = likes + 1 WHERE id = ?",
            [id]
        );

        await loadFavorites();
    }

    return {
        favorites,
        loading,
        loadFavorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
        isFavorite,
        putLike
    };
}