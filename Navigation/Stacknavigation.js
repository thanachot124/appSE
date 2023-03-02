import { createStackNavigator } from '@react-navigation/stack';
import Home from "../src/Home"
import Sale from "../src/sale" 
import Accept from "../src/accept"
import Verify from "../src/verify"
import Finish from "../src/finish"


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