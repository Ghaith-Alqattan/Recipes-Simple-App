import { createContext, useState } from "react";

export const FavoritesContext = createContext({
 ids: [],
 addFavorite: (id) => { },
 removeFavorite: (id) => { }
})

export default function FavoritesContextProvider({ children }) {
 const [favMealsIds, setFavMealsIds] = useState([])
 function addFavorite(id) {
  setFavMealsIds((currentFavoritesIds) => [...currentFavoritesIds, id])
 }

 function removeFavorite(id) {
  setFavMealsIds((currentFavoritesIds) => currentFavoritesIds.filter((mealId) => mealId !== id))
 }

 const value = {
  ids: favMealsIds,
  addFavorite: addFavorite,
  removeFavorite: removeFavorite
 }

 return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}