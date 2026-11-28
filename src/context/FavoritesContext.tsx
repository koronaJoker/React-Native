import useFavorites from "@/hooks/useFavorites";
import type { CommentData } from "@/types/comments";
import { createContext, useContext, type PropsWithChildren } from "react";


type FavoritesContextValue = {
    favorites: CommentData[];
    loading: boolean;
    addFavorite: (comment: CommentData) => Promise<void>;
    removeFavorite: (id: number) => Promise<void>;
    clearFavorites: () => Promise<void>;
    isFavorite: (id: number) => boolean;
    putLike: (id: number) => Promise<void>;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(null);


export function FavoritesProvider({ children }: PropsWithChildren) {
    const favoritesData = useFavorites();

    return (
        <FavoritesContext.Provider value={favoritesData}>
            {children}
        </FavoritesContext.Provider>
    );
}


export function useFavoritesContext() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error(
            "useFavoritesContext must be used inside FavoritesProvider"
        );
    }

    return context;
}