import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
 const favoriteMealsCtx = useContext(FavoritesContext)
 const favorites = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id))

 if (favorites.length === 0) {
  return <View style={styles.rootContainer}>
   <Text style={styles.noMealsText}>
    You have no favorite meals yet.
   </Text>
  </View>
 }


 return (
  <MealsList items={favorites} />
 )
}

const styles = StyleSheet.create({
 rootContainer: {
  flex: 1,
  justifyContent: 'center'
 },
 noMealsText: {
  fontSize: 18,
  color: 'white',
  textAlign: 'center'
 }
})