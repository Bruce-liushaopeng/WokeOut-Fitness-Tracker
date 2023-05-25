import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "3%"
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
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: "4%",
  },
  newWorkoutButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop:20,
    alignSelf: "center",
  },
  newWorkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  weightInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  weightInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  weightUnit: {
    fontSize: 16,
    color: "#888",
  },
  completedWorkoutContainer: {
    flexDirection: "column",
    marginBottom: 10,
    felx: 1,
  },
  completedWorkoutContainerRow: {
    flexDirection: "row",
    marginBottom: 20
  },
  leftColumn: {
    flexGrow: 1,
    paddingHorizontal: 20
  },
  completedWorkoutName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  completedWorkoutTime: {
    fontSize: 13,
    color: "#6d6b73"
  },
  completedWorkoutDetails: {
    fontSize: 16,
    color: "#54545a",
    padding: 5,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  confirmCancelButtonContainer: {
    flexDirection: "row"
  },
  confirmButton: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  cancelButton: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cancelButtonText: {
    fontWeight: 'bold',
    color: '#333333',
  },
});
