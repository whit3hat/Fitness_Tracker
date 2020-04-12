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
        result.forEach((workout) => {
            let total = 0;
            workout.name.forEach((name) => {
             total += name.duration;
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

//add a workout to the plan
router.put('/api/workouts/:id', (req, res) => {
    Workout.updateOne({_id: req.params.id}, {
        $push: {
            name: req.body,
        },
    })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

module.exports = router;
