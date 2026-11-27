
import CommentItem from "@/components/CommentItem"
import useFavorites from "@/hooks/useFavorites"
import Ionicons from "@expo/vector-icons/Ionicons"
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"

export default function FavoritesScreen() {
    const { favorites, clearFavorites } = useFavorites()

    return (
        <FlatList
            data={favorites}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <CommentItem comment={item} />
                </View>
            )}
            contentContainerStyle={[
                styles.list,
                favorites.length === 0 && styles.emptyList
            ]}
            ListHeaderComponent={
                favorites.length > 0 ? (
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>
                            Favorites ({favorites.length})
                        </Text>

                        <Pressable
                            onPress={clearFavorites}
                            style={({ pressed }) => [
                                styles.clearButton,
                                pressed && styles.clearButtonPressed
                            ]}
                        >
                            <Ionicons
                                name="trash-outline"
                                size={17}
                                color="#fff"
                            />

                            <Text style={styles.clearButtonText}>
                                Clear all
                            </Text>
                        </Pressable>
                    </View>
                ) : undefined
            }
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyIcon}>♡</Text>

                    <Text style={styles.emptyTitle}>
                        Пока ничего нет
                    </Text>

                    <Text style={styles.emptyText}>
                        Добавляйте комментарии в избранное,
                        и они появятся здесь.
                    </Text>
                </View>
            }
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
    },

    emptyList: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    item: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },

    header: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 5,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: "#222",
    },

    clearButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        backgroundColor: "#ef4444",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },

    clearButtonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.96 }],
    },

    clearButtonText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
    },

    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },

    emptyIcon: {
        fontSize: 65,
        color: "#d1d5db",
        marginBottom: 15,
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#222",
        marginBottom: 8,
    },

    emptyText: {
        fontSize: 14,
        color: "#888",
        textAlign: "center",
        lineHeight: 21,
    },
})
