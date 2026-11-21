import { Stack } from "expo-router"

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name = "(tabs)"
                options = {{ headerShown: false}}
            />
            <Stack.Screen
                name = "comment/[id]"
                options = {{ title: "Comment Details"}}
                />

            <Stack.Screen
                name = "add-modal"
                options = {{ title: "Add Comment", presentation: "modal"}}
            />
        </Stack>
    )
}