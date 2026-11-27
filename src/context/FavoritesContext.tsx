import { CommentData } from "@/types/comments"
import { createContext, useReducer, type PropsWithChildren } from "react"


type FavoritesContextValue = {
    favorites: CommentData[],
    addFavorite: (comment: CommentData) => void,
    removeFavorite: (id: number) => void,
    clearFavorites: () => void,
    isFavorite: (id: number) => boolean

}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null)

type FavoritesAction = 
    | {type: "add"; comment : CommentData} 
    | {type: "remove"; id: number}
    | {type: "clear"}


// Reducer    
function favoritesReducer(state: CommentData[],action: FavoritesAction) : CommentData[] {
    switch (action.type) {
        case "add" :
            return state.some(item => item.id === action.comment.id)
                ? state
                : [...state, action.comment]

        case "remove":
                return state.filter(item => item.id !== action.id)
        
                
        
        case "clear":
            return []

        default:
            return state
        
     }

    }


export default function FavoritesProvider({children}: PropsWithChildren) {
    const [favorites, dispatch] = useReducer(favoritesReducer, [] as CommentData[])
    
    function addFavorite(comment: CommentData) {
        dispatch({type: 'add', comment})
    }

    function removeFavorite(id: number) {
        dispatch({type: 'remove', id})
    }

    function clearFavorites() {
        dispatch({type: 'clear'})
    }

    function isFavorite(id: number) {
        return favorites.some(favorite => favorite.id === id)
    }

    const contextValue: FavoritesContextValue = {
        favorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
        isFavorite
    }

    return (
        <FavoritesContext.Provider value = {contextValue}>
            {children}
        </FavoritesContext.Provider>
    )
}