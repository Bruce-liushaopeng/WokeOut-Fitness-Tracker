import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    usernameContainer: {
      fontSize: 24,
      fontWeight: "bold",
      textShadowColor: "rgba(0, 0, 0, 0.4)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      marginTop: "5%",
    },
    button: {
      backgroundColor: "#F5F5F5",
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 10,
      marginTop: 20,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
    },
  });
  