import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { findIconByRouteName } from "./Helper/icon-render";
import { styles } from "./style/AppStyle";

import Graph from "./Graph";
import Calendar from "./Calendar";
import Gym from "./Gym";


const Stack = createBottomTabNavigator();

export default function App(state) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          // deciding which icon to render based on route name
          tabBarIcon: ({ color, size }) => {
            const iconName = findIconByRouteName(route.name)
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarStyle={{
          backgroundColor: "#F5F5F5",
        }}
        tabBarActiveTintColor="black"
        tabBarInactiveTintColor="gray"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Progress" component={Graph} />
        <Stack.Screen name="Gym" component={Gym} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// HomeScreen component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.usernameContainer}>Hi Bruce</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Graph")}
      >
        <Text style={styles.buttonText}>Go to Graph</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

