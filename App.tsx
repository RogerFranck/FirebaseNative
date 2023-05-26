import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignXn from "./pages/SignXn";
import ProductForm from "./pages/productForm";
import ServiceForm from "./pages/ServiceForm";
import BottomNavigator from "./components/bottomNavigator";
import GeneralState from "./context/generalState";
import SalesForm from "./pages/salesForm";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GeneralState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={SignXn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainPage"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductForm"
            component={ProductForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ServiceForm"
            component={ServiceForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalesForm"
            component={SalesForm}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GeneralState>
  );
}
