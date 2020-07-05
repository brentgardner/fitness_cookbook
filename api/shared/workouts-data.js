const data = {
    workouts: [
        {
            id: 1,
            name: 'workout inside',
            description: 'A nice 40 minute leg and core workout that can be done in a small space with limited equipment',
            type: 'EMOM',
            warmup: '',
            main: 'Round1: 18 DB squates, 45 seconds of bycicle crunches, and DB squate jumps. /n round 2: 10 DB reverse lunges, DB Russian twists, Max effort burpees'
        },
        {
            id: 2,
            name: 'Outside workiyt',
            description: 'a sweaty outdoor routine with a mix of running and db work',
            type: 'EMOM',
            warmup: '',
            main: 'Round1: 18 DB squates, 45 seconds of bycicle crunches, and DB squate jumps. /n run 400 meters. round 2: 10 DB reverse lunges, DB Russian twists, Max effort burpees run 400 meters'
        }
        
    ]
}

const getRandomInt = () => {
    const max = 1000;
    const min = 100;
    return Math.floor(Math.random() * Math.floor(max) + min);
  };
  
  const addWorkout = (workout) => {
    workout.id = getRandomInt();
    data.workouts.push(workout);
    return workout;
  };
  
  const updateWorkout = (workout) => {
    const index = data.workouts.findIndex((v) => v.id === workout.id);
    console.log(workout);
    data.workouts.splice(index, 1, workout);
    return workout;
  };
  
  const deleteWorkout = (id) => {
    const value = parseInt(id, 10);
    data.workouts = data.workouts.filter((v) => v.id !== value);
    return true;
  };
  
  const getWorkouts = () => {
    return data.workouts;
  };
  
  module.exports = { addWorkout, updateWorkout, deleteWorkout, getWorkouts };