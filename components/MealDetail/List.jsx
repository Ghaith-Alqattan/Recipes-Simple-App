import { StyleSheet, Text, View } from "react-native"

export default function List({ list }) {
 return (
  list.map((dataPoint, index) => (
   <View key={index} style={styles.listItem}>
    <Text style={styles.listText}>{dataPoint}</Text>
   </View>
  ))
 )
}

const styles = StyleSheet.create({
 listItem: {
  borderRadius: 6,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginVertical: 4,
  marginHorizontal: 12,
  backgroundColor: '#a2bfe8ff'
 },
 listText: {
  color: '#242d3aff'
 }
})