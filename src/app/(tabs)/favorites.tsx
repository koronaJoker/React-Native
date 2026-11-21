import { Text, View } from "react-native"

export default function Favorites() {
    return (
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Favorites</Text>
            <Text>Здесь будут показаны избранные комментарии</Text>
        </View>
    )
}