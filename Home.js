import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './style/style';
function Home({ navigation }) {
    return (
      <View style={styles.container}>
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

export default Home;