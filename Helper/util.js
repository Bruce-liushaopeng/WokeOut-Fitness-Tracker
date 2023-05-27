export const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

export const generateMarkedDates = (completedWorkouts) => {
  const markedDates = {};

  completedWorkouts.forEach((workout) => {
    const date = new Date(workout.time);
    const dateString = date.toISOString().split("T")[0];

    markedDates[dateString] = { marked: true };
  });

  return markedDates;
};
  