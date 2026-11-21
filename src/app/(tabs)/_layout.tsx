import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Comments",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubbles-outline"
              size={size}
              // color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={typeof color === "string" ? color : "#000"}
            />
          ),
        }}
      />
    </Tabs>
  )
}