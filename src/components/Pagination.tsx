import { Pressable, StyleSheet, Text, View } from "react-native";
 
 
 
type PaginationProps = { 
    page: number, 
    totalPages: number, 
    loading: boolean,
    onPrevious : () => void,
    onNext: () => void,
} 
 
export default function Pagination ({onPrevious, onNext, page, totalPages, loading} : PaginationProps) { 
 
    const previousDisabled = page === 1 || loading; 
    const nextDisabled = page >= totalPages || loading; 
 
 
    return ( 
        <View style = {styles.pagination}> 
            <Pressable 
                disabled = {previousDisabled} 
                style = {previousDisabled && styles.disabled} 
                onPress = {onPrevious}> 
                <Text style = {styles.bold}>Назад</Text> 
            </Pressable> 
 
            <Text style={styles.bold}>{page} / {totalPages}</Text> 
 
            <Pressable 
                style = {nextDisabled && styles.disabled} 
                disabled = {nextDisabled} 
                onPress = {onNext}> 
                <Text  style = {styles.bold}>Вперед</Text> 
            </Pressable> 
        </View> 
 
    ) 
} 
 
const styles = StyleSheet.create({ 
pagination: {
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 20,
  paddingHorizontal: 30,
},
 
    bold: { 
        fontWeight: 900, 
        fontSize: 14, 
        color: "rgb(33,57,104)" 
    },

    disabled: {
        opacity: 0.6
    }
})