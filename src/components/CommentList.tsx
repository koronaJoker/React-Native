import { CommentData } from "@/types/comments";
import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import CommentItem from "./CommentItem";
import EmptyData from "./ui/EmptyData";


type ItemProps = {
    comments: CommentData[]
}

export default function CommentList ({comments} : ItemProps) {   



    return (
        <FlatList 
            contentContainerStyle={styles.items}
            data = {comments}
            keyExtractor ={(item) => item.id.toString()}
            renderItem = {({ item, index }) => {
                return (
                <View style={styles.content}>
                    <Link
                        href={{
                        pathname: "/comment/[id]",
                        params: { id: String(item.id) }
                        }}
                        style={styles.link}
                        >
                    <CommentItem
                        comment = {item}
                    />
                    </Link>
                </View>
                )
            }    
            }
            ListEmptyComponent= {EmptyData}
           
        />
            

        
    )
}

const styles = StyleSheet.create({
    items: {
        paddingHorizontal: 20,
        flexGrow: 1,
        marginVertical: 20,
        gap: 20,
        alignItems: "center",
    },
      link: {
        
    },
    content: {},
    h2: {}
})