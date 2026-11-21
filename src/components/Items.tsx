import { Comment } from "@/types/types";
import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import Item from "./Item";
import EmptyData from "./ui/EmptyData";


type ItemProps = {
    comments: Comment[]
}

export default function Items ({comments} : ItemProps) {   



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
                    <Item
                        id = {item.id}
                        user={item.user}
                        body = {item.body}
                        likes = {item.likes}
                        postId={item.postId}
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