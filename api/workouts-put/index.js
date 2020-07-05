const data = require('../shared/workout-data');

module.exports = async function (context, req) {
  const workout = {
    id: parseInt(req.params.id, 10),
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    warmup: req.body.warmup,
    main: req.body.main
  };

  try {
    const updatedWorkout = data.updateWorkout(workout);
    context.res.status(200).json(updatedWorkout);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
