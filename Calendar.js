import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Calendar as CalendarPicker } from "react-native-calendars";
import { connect } from "react-redux";
import { styles } from "./style/style";

import {
  generateMarkedDates,
  formatTime,
  addSelectedProperties,
  generateTimeStringFromDate,
} from "./Helper/util";

const renderCompletedWorkouts = (compeletedWorkouts) => {
  return compeletedWorkouts
    .slice()
    .reverse()
    .map((completedWorkout, index) => (
      <View key={index} style={styles.completedWorkoutContainerRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.completedWorkoutName}>
            {completedWorkout.name}
          </Text>
          <Text style={styles.completedWorkoutTime}>
            {`compelete time: ${formatTime(completedWorkout.time)}`}
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

const Calendar = ({ navigation, workOutData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [workoutsOnSpecificDate, setWorkoutsOnSpecificDate] = useState([]);
  const initialMarkedDate = useMemo(() => {
    return generateMarkedDates(workOutData);
  }, [workOutData]);
  const [markedDates, setMarkedDates] = useState(initialMarkedDate);
  const [reloadCalendar, setReloadCalendar] = useState(false); // New state to trigger re-rendering

  //const markedDates = generateMarkedDates(DUMMY_COMPLETED_WORKOUT);

  // Add this useEffect to handle re-rendering when navigating to the Calendar page
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setReloadCalendar((prev) => !prev);
      setMarkedDates(initialMarkedDate)
    });

    return unsubscribe;
  }, [navigation]);

  const filterWorkoutsByDate = (date) => {
    console.log("target date" + date)
    return workOutData.filter((workout) => {
      const workoutDate = new Date(workout.time);
      return generateTimeStringFromDate(workoutDate) === date;
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setMarkedDates(addSelectedProperties(initialMarkedDate, date.dateString));
  };

  const handleDetailButtonPress = () => {
    if (selectedDate) {
      const filteredWorkouts = filterWorkoutsByDate(selectedDate);
      setWorkoutsOnSpecificDate(filteredWorkouts);
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <CalendarPicker
          markedDates={markedDates}
          onDayPress={handleDateSelect}
          style={styles.calendarPicker}
        />
      </View>
      {selectedDate ? (
        <View>
          {markedDates.hasOwnProperty(selectedDate) &&
          markedDates[selectedDate].marked ? ( // checking if the selected date has workout data
            <TouchableOpacity
              style={styles.button}
              onPress={handleDetailButtonPress}
            >
              <Text style={styles.buttonText}>View Detail</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.noWorkOutFoundText}>No Workout Found</Text>
          )}
        </View>
      ) : (
        <Text style={styles.buttonText}>Pick a date to view detail</Text>
      )}

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
              {renderCompletedWorkouts(workoutsOnSpecificDate)}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => ({
  workOutData: state.gymData.workOutData,
});

export default connect(mapStateToProps)(Calendar);
