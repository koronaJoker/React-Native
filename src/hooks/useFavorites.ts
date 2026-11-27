import { FavoritesContext } from "@/context/FavoritesContext"
import { useContext } from "react"

export default function useFavorites() {
    const context = useContext(FavoritesContext)

    if (context === null) {
        throw new Error('useFavorites должен быть использован внутри FavoritesProvider')
    }

    return context
}