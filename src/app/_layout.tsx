import { Stack } from "expo-router";
import FavoritesProvider from "../context/FavoritesContext";

export default function RootLayout() {
    return (
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
    );
}