export const formatTime = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
};

export const generateMarkedDates = (completedWorkouts) => {
  const markedDates = {};
  console.log(" generate marked dates called")
  completedWorkouts.forEach((workout) => {
    const date = new Date(workout.time);
    const dateString = date.toISOString().split("T")[0];

    markedDates[dateString] = { marked: true };
  });

  return markedDates;
};

export const addSelectedProperties = (markedDates, selectedDate) => {
  const modifiedMarkedDates = { ...markedDates };
    modifiedMarkedDates[selectedDate] = {
      ...modifiedMarkedDates[selectedDate], // keeping the marked property but not overwriting
      selected: true,
      selectedColor: "#99ccff",
  }

  return modifiedMarkedDates;
};
