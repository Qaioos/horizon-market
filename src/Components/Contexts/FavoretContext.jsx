import { createContext, useState, useEffect } from "react";

export const Favoret = createContext();

export default function CreateFavoretProvider({ children }) {
    const [favitems, setfavitems] = useState(() => {
        const savedfav = localStorage.getItem("favItems");
        return savedfav ? JSON.parse(savedfav) : [];
    });

    const addToFav = (item) => {
        setfavitems((prev) => {
            if(prev.some((i) => i.id === item.id)) return prev;
            return [...prev, item]
        });
    };

    const removeFav = (id) => {
        setfavitems((prev) => prev.filter((i) => i.id !== id))
    } 

    useEffect(() => {
        localStorage.setItem("favItems", JSON.stringify(favitems));
    }, [favitems]);

    return (
        <Favoret.Provider value={{ favitems, addToFav ,removeFav}}>
            {children}
        </Favoret.Provider>
    );
}
