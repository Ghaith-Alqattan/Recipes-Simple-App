import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import MealDetails from '../components/MealDetails'

export default function MealDetailScreen({ route, navigation }) {
 const mealId = route.params.mealId
 const mealFavoriteCtx = useContext(FavoritesContext)
 const selectedMeal = MEALS.find((meal) => meal.id === mealId)
 const mealIsFavorite = mealFavoriteCtx.ids.includes(mealId)

 function FavoriteStatusToggle() {
  mealIsFavorite ? mealFavoriteCtx.removeFavorite(mealId) : mealFavoriteCtx.addFavorite(mealId)
 }

 useLayoutEffect(() => {
  navigation.setOptions({
   headerRight: () => {
    return <IconButton color='white' icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={FavoriteStatusToggle} />
   }
  })
 }, [navigation, FavoriteStatusToggle])


 return (
  <ScrollView style={styles.rootContainer}>
   <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
   <Text style={styles.title}>{selectedMeal.title}</Text>
   <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
   <View style={styles.outerListContainer}>
    <View style={styles.innerListContainer}>
     <Subtitle >Ingredients</Subtitle>
     <List list={selectedMeal.ingredients} />
     <Subtitle >Steps</Subtitle>
     <List list={selectedMeal?.steps} />
    </View>
   </View>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
 rootContainer: {
  marginBottom: 40
 },
 image: {
  width: '100%',
  height: 350
 },
 title: {
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
  margin: 8,
  color: 'white'
 },
 outerListContainer: {
  alignItems: 'center'
 },
 innerListContainer: {
  width: '80%'
 }
})