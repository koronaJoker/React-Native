import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";


type Comment = {
    id: number,
    title: string,
    content: string
}

type Props = {
    onCreate: (comment: Comment) => void;
}

export default function AddCommentScreen({onCreate} : Props) {

    const router = useRouter();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    //Validation

    const titleError = title.trim().length < 3 
        ? "Title must be contain at least 3 characters" 
        : null

    const contentError = content.trim().length < 5
        ? "Content must be contain at least 5 characters" 
        : null

    const formValid = !titleError && !contentError

    function handleSubmit() {
        if (!formValid) {
            return
        }

        // onCreate({
        //     id: Date.now(),
        //     title: title.trim(),
        //     content: content.trim()
        // })

        setTitle("")
        setContent("")
        Keyboard.dismiss();
        router.back();
    }

    return (
        <View style = {styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Text style = {styles.heading}>Add Comment Form</Text>
                <TextInput
                    maxLength={80}
                    value={title}
                    onChangeText={setTitle}
                    placeholder = "Enter Title"
                    style = {styles.input}
                />

                {title.length > 0 && titleError && (
                    <Text style = {styles.error}>{titleError}</Text>
                )}


                <TextInput
                    value={content}
                    onChangeText={setContent}
                    placeholder = "Enter Content"
                    style = {[styles.input, styles.content]}
                    multiline={true}
                    numberOfLines={6}
                    textAlignVertical="top"
                    />

                 {content.length > 0 && contentError && (
                    <Text style = {styles.error}>{contentError}</Text>
                )}

                <View style = {
                    [styles.button, 
                    !formValid && styles.buttonDisabled]
                }>
                    <Button title = "Add Comment" onPress={handleSubmit} disabled = {!formValid}/>
                </View>
                
                
            </KeyboardAvoidingView>
        </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },

    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },

    content: {
        minHeight: 120,
    },

    error: {
        color: "red",
        fontSize: 12,
    },

    button: {
        backgroundColor: "#007bff",
        borderRadius: 5,
        marginTop: 10,
    },

    buttonDisabled: {
        opacity: 0.5,
    },
});