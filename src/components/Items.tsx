import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Comment } from "../app/index";
import Item from "./Item";


type ItemProps = {
    comments: Comment[]
}

export default function Items ({comments} : ItemProps) {   
    return (
        <FlatList 
            data = {comments}
            keyExtractor ={(item) => item.id.toString()}
            renderItem = {({ item, index }) => {
                <View style={styles.content}>
                    <Item
                        id = {item.id}
                        user={item.user}
                        body = {item.body}
                        likes = {item.likes}
                        postId={item.postId}
                    />
                </View>
                }
            }
            ListEmptyComponent= {}
        />
            

        
    )
}

const styles = StyleSheet.create({
    content: {},
    h2: {}
})