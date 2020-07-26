const data = require('../shared/workout-data');

module.exports = async function (context, req) {
  try {
    const workouts = context.bindings.workouts //data.getWorkouts();
    context.res.status(200).json(workouts);
  } catch (error) {
    context.res.status(500).send(error);
  }
};