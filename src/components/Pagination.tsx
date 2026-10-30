import { type Dispatch, type SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
 
 
 
type PaginationProps = { 
    currentPage: number, 
    setCurrentPage: Dispatch<SetStateAction<number>>, 
    totalPages: number, 
    loading: boolean,
 
} 
 
export default function Pagination ({currentPage, setCurrentPage, totalPages, loading} : PaginationProps) { 
 
    const previousDisabled = currentPage === 1 || loading; 
    const nextDisabled = currentPage >= totalPages || loading; 
 
 
    return ( 
        <View style = {styles.pagination}> 
            <Pressable 
                disabled = {previousDisabled} 
                style = {previousDisabled && styles.disabled} 
                onPress = {() => setCurrentPage(prev => prev - 1)}> 
                <Text style = {styles.bold}>Назад</Text> 
            </Pressable> 
 
            <Text style={styles.bold}>{currentPage} / {totalPages}</Text> 
 
            <Pressable 
                style = {nextDisabled && styles.disabled} 
                disabled = {nextDisabled} 
                onPress = {() => setCurrentPage(prev => prev + 1)}> 
                <Text  style = {styles.bold}>Вперед</Text> 
            </Pressable> 
        </View> 
 
    ) 
} 
 
const styles = StyleSheet.create({ 
    pagination: { 
        position: "absolute", 
        bottom: 40, 
        left: 0, 
        right: 0, 
        backgroundColor: "#8bd89caa", 
 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: 20, 
        
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