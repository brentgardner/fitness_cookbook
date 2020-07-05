const data = require('../shared/workouts-data');

module.exports = async function (context, req) {
  try {
    const workouts = data.getWorkouts();
    context.res.status(200).json(workouts);
  } catch (error) {
    context.res.status(500).send(error);
  }
};