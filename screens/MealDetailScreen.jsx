import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
 const mealId = route.params.mealId

 const selectedMeal = MEALS.find((meal) => meal.id === mealId)

 function headerButtonHandler() {
  console.log('first')
 }

 useLayoutEffect(() => {
  navigation.setOptions({
   headerRight: () => {
    return <IconButton color='white' icon='star' onPress={headerButtonHandler} />
   }
  })
 }, [navigation, headerButtonHandler])


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