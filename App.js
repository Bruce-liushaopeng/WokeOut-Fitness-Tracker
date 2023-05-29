import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { findIconByRouteName } from "./Helper/icon-render";
import { Provider } from "react-redux";
import store from "./reducer/store";

import Progress from "./Progress";
import Calendar from "./Calendar";
import Gym from "./Gym";
import Home from "./Home";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: "#F5F5F5", // Set the background color of the header
            },
            headerTitleStyle: {
              fontWeight: "bold", // Set the font weight of the header text
            },
            // deciding which icon to render based on route name
            tabBarIcon: ({ color, size }) => {
              const iconName = findIconByRouteName(route.name);
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarStyle={{
            backgroundColor: "#F5F5F5",
          }}
          tabBarActiveTintColor="black"
          tabBarInactiveTintColor="gray"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Gym" component={Gym} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
