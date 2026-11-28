
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    onPress: () => void;
    disabled?: boolean;
};

export default function ClearFavoritesButton({
    onPress,
    disabled = false
}: Props) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
                disabled && styles.disabled
            ]}
        >
            <Ionicons
                name="trash-outline"
                size={17}
                color="#fff"
            />

            <Text style={styles.buttonText}>
                Clear all
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        backgroundColor: "#ef4444",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },

    buttonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.96 }],
    },

    disabled: {
        opacity: 0.5,
    },

    buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
},
});
