const data = require('../shared/workout-data');

module.exports = async function (context, req) {
  const workout = {
    id: 5,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    warmup: req.body.warmup,
    main: req.body.main,
    duration: req.body.duration,
    favorite: req.body.favorite,
    tags: req.body.tags
  };

  try {
    const newWorkout = data.addWorkout(workout);
    context.res.status(201).json(newWorkout);

  } catch (error) {
    console.log(error)
    context.res.status(500).send(error);
  }
};
