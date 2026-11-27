import CommentForm from "@/components/CommentForm";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard } from "react-native";


type Comment = {
    id: number,
    title: string,
    content: string
}


export default function AddCommentScreen() {

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
        <CommentForm 
            handleSubmit={handleSubmit}  
            title={title} 
            content={content} 
            setTitle={setTitle} 
            setContent={setContent} 
            titleError={titleError ?? ""} 
            contentError={contentError ?? ""} 
            formValid={formValid} />
    )
}

