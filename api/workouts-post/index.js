const data = require('../shared/workout-data');

module.exports = async function (context, req) {
  const workouts = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    warmup: req.body.warmup,
    main: req.body.main
  };

  try {
    const newWorkout = data.addWorkout(workout);
    context.res.status(201).json(newWorkout);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
