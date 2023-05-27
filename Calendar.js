import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Calendar as CalendarPicker } from "react-native-calendars";
import { styles } from "./style/style";
import { generateMarkedDates, formatTime } from "./Helper/util";
import { DUMMY_COMPLETED_WORKOUT } from "./dummy";

const renderCompletedWorkouts = () => {
  return DUMMY_COMPLETED_WORKOUT.slice()
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

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const markedDates = generateMarkedDates(DUMMY_COMPLETED_WORKOUT);
  console.log(markedDates.hasOwnProperty(selectedDate));

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    console.log(date.dateString);
  };

  const handleDetailButtonPress = () => {
    if (selectedDate) {
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
          {markedDates.hasOwnProperty(selectedDate) ? (
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
      ) : <Text style={styles.buttonText}>Pick a date to view detail</Text>}

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
              {renderCompletedWorkouts()}
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

export default Calendar;
