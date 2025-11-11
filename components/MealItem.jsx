import { useNavigation } from '@react-navigation/native'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import MealDetails from './MealDetails'

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
 const navigation = useNavigation()

 function mealDetailHandler() {
  navigation.navigate('mealDetail', {
   mealId: id
  })
 }


 return (
  <View style={styles.mealItem}>
   <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.pressedItem : null} onPress={mealDetailHandler}>
    <View>
     <Image source={{ uri: imageUrl }} style={styles.image} />
     <Text style={styles.title}>{title}</Text>
    </View>
   </Pressable>
   <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
  </View>
 )
}

const styles = StyleSheet.create({
 mealItem: {
  margin: 16,
  borderRadius: 8,
  overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  backgroundColor: '#1f2937',
  elevation: 4,
  shadowColor: 'black',
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 16
 },
 image: {
  width: '100%',
  height: 200
 },
 title: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 18,
  color: 'white',
  margin: 8
 },
 pressedItem: {
  opacity: 0.5
 },
})