import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  function DrawerNavigator() {
    return (
      <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#1f2937' },
        headerTintColor: '#fff',
        sceneStyle: { backgroundColor: '#111827' },
        drawerActiveBackgroundColor: '#517dbcff',
        drawerActiveTintColor: 'white',
        drawerStyle: { backgroundColor: "#1f2937" },
        drawerInactiveTintColor: "white",
      }}>
        <Drawer.Screen name='categories' component={CategoriesScreen} options={{ title: "All Categories", drawerIcon: ({ color, size }) => { <Ionicons name='list' size={size} color={color} /> } }} />
        <Drawer.Screen name='favorites' component={FavoritesScreen} options={{ title: "Favorites", drawerIcon: ({ color, size }) => { <Ionicons name='star' size={size} color={color} /> } }} />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#1f2937' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#111827' },
          }}>
            <Stack.Screen name='drawer' component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='mealsCategories' component={CategoriesScreen} options={{ headerShown: false }} />
            <Stack.Screen name='mealOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='mealDetail' component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
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
