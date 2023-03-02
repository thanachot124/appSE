import { createStackNavigator } from '@react-navigation/stack';
import Home from "../src/Home"
import Sale from "../src/Sale"
import Accept from "../src/Accept"
import Verify from "../src/Verify"
import Finish from "../src/Finish"
import { Button } from 'react-native';


const Stack = createStackNavigator();

function StackProvider({ children }) {
  return (
    <Stack.Navigator>
      <MyStack />
    </Stack.Navigator>
  )
}
export default function MyStack({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        
        component={Home} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sale"
        component={Sale}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Accept" component={Accept} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Finish" component={Finish} />
    </Stack.Navigator>
  );
}