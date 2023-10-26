const Workout = require("../database/workout");
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
    const allWorkouts = Workout.getOneWorkout();
  return allWorkouts;
};

const createNewWorkout = () => {
    const allWorkouts = Workout.createNewWorkout();
  return allWorkouts;
};

const updateOneWorkout = () => {
    const allWorkouts = Workout.updateOneWorkouts();
  return allWorkouts;
};

const deleteOneWorkout = () => {
    const allWorkouts = Workout.deleteOneWorkout();
  return allWorkouts;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};