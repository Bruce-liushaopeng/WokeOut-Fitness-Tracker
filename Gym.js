import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./style/style";
import { DUMMY_COMPLETED_WORKOUT } from "./dummy";

const { height } = Dimensions.get("window");

const Gym = () => {
  const [showButton, setShowButton] = useState(true);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");
  const [completedWorkouts, setCompletedWorkouts] = useState(
    DUMMY_COMPLETED_WORKOUT
  );
  const [showInput, setShowInput] = useState(false);
  const [buttonAnimation] = useState(new Animated.Value(0));
  const [workoutWeights, setWorkoutWeights] = useState([]);

  const handleWorkoutNameChange = (text) => {
    setWorkoutName(text);
  };

  const handleWorkoutRepsChange = (text) => {
    setWorkoutReps(text);
  };

  const handleWeightChange = (index, weight) => {
    const updatedWeights = [...workoutWeights];
    updatedWeights[index] = weight;
    setWorkoutWeights(updatedWeights);
  };

  const handleWorkoutSubmit = () => {
    if (workoutName.trim() !== "" && workoutReps.trim() !== "") {
      const workout = {
        name: workoutName,
        reps: workoutReps,
        weights: workoutWeights,
      };
      setCompletedWorkouts([...completedWorkouts, workout]);
      setWorkoutName("");
      setWorkoutReps("");
      setWorkoutWeights([]);
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
    setShowButton(!showButton); // Hide the button when input is shown
    Animated.timing(buttonAnimation, {
      toValue: showInput ? 0 : 1,
      duration: 1,
      useNativeDriver: true,
    }).start();
    setWorkoutName('')
    setWorkoutReps('')
  };

  const renderCompletedWorkouts = () => {
    return completedWorkouts
      .slice()
      .reverse()
      .map((completedWorkout, index) => (
        <View key={index} style={styles.completedWorkoutContainerRow}>
          <View style={styles.leftColumn}>
            <Text style={styles.completedWorkoutName}>
              {completedWorkout.name}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            {completedWorkout.weights.map((weight, weightIndex) => (
              <Text
                key={weightIndex}
                style={styles.completedWorkoutDetails}
              >{`Rep ${weightIndex + 1}: ${weight} lb`}</Text>
            ))}
          </View>
        </View>
      ));
  };

  const navigateToWorkoutDetail = (workoutName) => {
    // Logic to navigate to the workout detail page with the selected workout name
  };
  const renderWeightInputs = () => {
    const inputs = [];
    for (let i = 0; i < parseInt(workoutReps); i++) {
      inputs.push(
        <View key={i} style={styles.weightInputContainer}>
          <TextInput
            style={styles.weightInput}
            placeholder={`Weight for Rep ${i + 1}`}
            placeholderTextColor="#888"
            onChangeText={(text) => handleWeightChange(i, text)}
            keyboardType="numeric"
          />
          <Text style={styles.weightUnit}>lb</Text>
        </View>
      );
    }
    return inputs;
  };
  return (
    <ScrollView contentContainerStyle={{ minHeight: height, flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={{ marginBottom: showInput ? 150 : 0 }}>
          {showButton && (
            <Animated.View>
              <TouchableOpacity
                style={styles.newWorkoutButton}
                onPress={toggleInput}
              >
                <Text style={styles.newWorkoutButtonText}>New Workout</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          {showInput && (
            <Animated.View>
              <TextInput
                style={styles.input}
                value={workoutName}
                onChangeText={handleWorkoutNameChange}
                placeholder="Enter workout name"
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.input}
                value={workoutReps}
                onChangeText={handleWorkoutRepsChange}
                placeholder="Enter workout reps"
                placeholderTextColor="#888"
                keyboardType="numeric"
              />
              {renderWeightInputs()}
              <View style={styles.confirmCancelButtonContainer}>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleWorkoutSubmit}
                >
                  <Text style={styles.confirmButtonText}>confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={toggleInput}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
        </View>
        <View style={styles.completedWorkoutContainer}>
          {renderCompletedWorkouts()}
        </View>
      </View>
    </ScrollView>
  );
};

export default Gym;
