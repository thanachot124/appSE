import { createStackNavigator } from '@react-navigation/stack';
import Home from "../src/Home"
import Sale from "../src/Sale" 
import Accept from "../src/Accept"
import Verify from "../src/Verify"
import Finish from "../src/Finish"


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sale" component={Sale} />
       <Stack.Screen name="Accept" component={Accept} />
       <Stack.Screen name="Verify" component={Verify} />
       <Stack.Screen name="Finish" component={Finish} />
    </Stack.Navigator>
  );
}