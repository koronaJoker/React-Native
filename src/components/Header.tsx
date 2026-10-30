import { StyleSheet, Text, View } from 'react-native'

export default function Header () {
    return (
        <View style = {styles.header}>
            <Text style = {styles.caption}>Comments</Text>
            <Text style = {styles.desc}>Здесь вы можете оставить свой коммент🤪</Text>
            <View style = {styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 15,
        paddingHorizontal: 20
    },
    caption: {
        fontWeight: 900,
        fontSize: 30,
        color: "#213968"
    },

    desc: {
        fontSize: 14,
        color: "rgb(33 57 104)",
        fontWeight: 800
    },
    divider: {
        backgroundColor: "rgb(33 57 104)",
        height:2,
        marginVertical: 5
        
    }
})