import { StyleSheet, Text, View } from "react-native";

export default function LoadingData() {
    return (
                <View style = {styles.center}>
                    <Text style = {styles.loading}>Загружаем ваши данные</Text>
                    <Text style = {styles.loading}>Пожалуйста подождите</Text>
                </View>
            )
        }
        
        const styles = StyleSheet.create({
            center: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                
            },
            loading: {
                color: "#304687",
                fontWeight: 900,
            }
        })