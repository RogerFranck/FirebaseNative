import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignXn from "./pages/SignXn";
import ProductForm from "./pages/productForm";
import BottomNavigator from "./components/bottomNavigator";
import GeneralState from "./context/generalState";

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
        </Stack.Navigator>
      </NavigationContainer>
    </GeneralState>
  );
}
