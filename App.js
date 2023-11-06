import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shop from './component/Shop';
import Welcome from './component/Welcome';
import Drinks from './component/Drinks';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
   
     <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="1" component={Welcome}></stack.Screen>
        <stack.Screen name="2" component={Shop}></stack.Screen>
        <stack.Screen name="3" component={Drinks}></stack.Screen>
      </stack.Navigator>
     </NavigationContainer>
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
