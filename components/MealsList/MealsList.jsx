import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem"

export default function MealsList({ items }) {

 const renderMealItem = (itemData) => {
  const item = itemData.item
  const mealItemProps = {
   id: item.id,
   title: item.title,
   imageUrl: item.imageUrl,
   complexity: item.complexity,
   duration: item.duration,
   affordability: item.affordability,
  }


  return <MealItem {...mealItemProps} />
 }

 return (
  <View style={styles.container}>
   <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
  </View>
 )

}

const styles = StyleSheet.create({
 container: {
  padding: 16,
  flex: 1
 },
 text: {
  color: 'white'
 }
})
