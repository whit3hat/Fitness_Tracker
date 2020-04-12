//require the express router
const router = require('express').Router();

//using the workout model
const Workout = require('../models/workouts.js');

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(404).json(err)
    });
});

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((result) => {
        result.forEach((exercise) => {
            let total = 0;
            workout.exercises.forEach((exercise) => {
             total += exercise.duration;
            });
        workout.totalDuration = total;
    });
    res.json(result);
})
.catch((err) => {
    res.status(404).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .sort({ data: -1 })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});
module.exports = router;
