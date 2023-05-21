import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Products from "../pages/products";
import Services from "../pages/services";
import Sales from "../pages/sales";
import { Grid, Archive, CheckSquare } from "react-native-feather";


const Tab = createMaterialBottomTabNavigator();

function MyTabs({ navigation }: any) {
    return (
        <Tab.Navigator
            activeColor="#004170"
            labeled={false}
            barStyle={{ backgroundColor: '#eceeef' }}
        >
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarIcon: () => (
                        <Grid stroke={'black'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Services"
                component={Services} options={{
                    tabBarIcon: () => (
                        <CheckSquare stroke={'black'} />
                    ),
                }} />
            <Tab.Screen
                name="Sales"
                component={Sales}
                options={{
                    tabBarIcon: () => (
                        <Archive stroke={'black'} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default MyTabs;