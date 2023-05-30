export const formatTime = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
};

export const generateMarkedDates = (completedWorkouts) => {
  const markedDates = {};
  completedWorkouts.forEach((workout) => {
    const date = new Date(workout.time);
    const dateString = generateTimeStringFromDate(date);
    markedDates[dateString] = { marked: true };
  });

  return markedDates;
};

export const generateTimeStringFromDate = (dateObj) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateList = dateObj.toLocaleDateString('en-US', options).split('/') //   05/25/2023
    
    const niceOrderedDateList = []
    niceOrderedDateList[0] = dateList[2]
    niceOrderedDateList[1] = dateList[0]
    niceOrderedDateList[2] = dateList[1]
    const dateString = niceOrderedDateList.join('-')
    return dateString
}

export const addSelectedProperties = (markedDates, selectedDate) => {
  const modifiedMarkedDates = { ...markedDates };
    modifiedMarkedDates[selectedDate] = {
      ...modifiedMarkedDates[selectedDate], // keeping the marked property but not overwriting
      selected: true,
      selectedColor: "#99ccff",
  }

  return modifiedMarkedDates;
};
