import { StyleSheet, Text, View } from "react-native"

export default function Subtitle({ children }) {
 return (
  <View style={styles.subtitleContainer}>
   <Text style={styles.subtitle}>{children}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 subtitle: {
  color: '#a2bfe8ff',
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',

 },
 subtitleContainer: {
  borderBottomColor: '#a2bfe8ff',
  borderBottomWidth: 2,
  marginHorizontal: 12,
  marginVertical: 6,
  padding: 6,
 }
})