import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    title: string;
    setTitle: (text: string) => void;
    titleError: string;
    content: string;
    setContent: (text: string) => void;
    contentError: string;
    handleSubmit: () => void;
    formValid: boolean;
}

export default function CommentForm({title, setTitle, titleError, content, setContent, contentError, handleSubmit, formValid} : Props) {
    return (
        <View style = {styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Text style = {styles.heading}>Add Comment Form</Text>

                <Text style = {styles.label}>Title</Text>
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

                <Text style = {styles.label}>Content</Text>
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
    );
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

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    }
});