import { StyleSheet, Text, View } from "react-native";

export default function ErrorData () {
    return (
            <View style = {styles.center}>
                <Text style = {styles.error}>Возникла ошибка при получении данных</Text>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            
        },
        error: {
            color: "#bc283a",
            fontWeight: 900,
        }
    })