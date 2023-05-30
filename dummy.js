export const DUMMY_COMPLETED_WORKOUT = [
  {
    name: "Bench Press",
    reps: 4,
    weights: [10, 20, 30, 10], // Updated weights: [10, 20, 30, 10, 20]
    time: new Date(2023, 4, 25, 16, 5).getTime(),
  },
  {
    name: "Squat",
    reps: 4,
    weights: [10, 20, 30, 10], // Updated weights: [10, 20, 30, 10, 20]
    time: new Date(2023, 4, 25, 16, 10).getTime(),
  },
  {
    name: "Shoulder Press",
    reps: 5,
    weights: [10, 20, 30, 10, 20], // Updated weights: [10, 20, 30, 10, 20]
    time: new Date(2023, 4, 25, 16, 25).getTime(),
  },
];

export const initialState = {
  value: 0,
  workOutData: DUMMY_COMPLETED_WORKOUT
}
