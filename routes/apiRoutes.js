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

module.exports = router;