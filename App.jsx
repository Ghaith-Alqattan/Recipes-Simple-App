import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#1f2937' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#111827' },
        }}>
          <Stack.Screen name='mealsCategories' component={CategoriesScreen} options={{ title: 'Meals Categories' }} />
          <Stack.Screen name='mealOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='mealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
