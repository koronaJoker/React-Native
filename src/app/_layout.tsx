import { FavoritesProvider } from "@/context/FavoritesContext";
import { initDatabase } from "@/database/database";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
    return (
        <SQLiteProvider
            databaseName="comments-db"
            onInit={initDatabase}
        >
            <FavoritesProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="comment/[id]"
                        options={{ title: "Comment Details" }}
                    />

                    <Stack.Screen
                        name="add-modal"
                        options={{
                            title: "Add Comment",
                            presentation: "modal"
                        }}
                    />
                </Stack>
            </FavoritesProvider>
        </SQLiteProvider>
    );
}