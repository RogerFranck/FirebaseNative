import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Products from "../pages/products";
import Services from "../pages/services";
import { Grid, Archive, CheckSquare, LogOut } from "react-native-feather";
import { useContext } from "react";
import { GeneralContext } from "../context/generalContext";
import SignOutControl from "./common/signOutControl";
import Sales from "../pages/sales";

const Tab = createMaterialBottomTabNavigator();

function MyTabs({ navigation }: any) {
  const { user } = useContext(GeneralContext);
  return (
    <Tab.Navigator
      activeColor="#004170"
      labeled={false}
      barStyle={{ backgroundColor: "#eceeef" }}
    >
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: () => <Grid stroke="black" />,
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: () => <CheckSquare stroke="black" />,
        }}
      />
      <Tab.Screen
        name="Sales"
        component={Sales}
        options={{
          tabBarIcon: () => <Archive stroke="black" />,
        }}
      />
      {user && (
        <Tab.Screen
          name="signOut"
          component={SignOutControl}
          options={{
            tabBarIcon: () => <LogOut stroke="black" />,
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default MyTabs;
