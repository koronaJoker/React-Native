import { StyleSheet, Text, View } from "react-native"

export default function EmptyData () {
    return (
        <View style = {styles.center}>
            <Text>Список комментариев пуст</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})