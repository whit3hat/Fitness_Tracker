var db = require('../models');
const router = require('express').Router();
// module.exports = function(app) {
//     app.get('/api/workouts/range', function(req, res) {
//         db.Workout.find({}).then(function(dbWorkout) {
//             res.json(dbWorkout);
//         });
//     });

//     app.post('/api/workouts', (req, res) => {
//       db.Workout.create(req.body).then(function(dbWorkout) {
//           res.json(dbWorkout)
//       });
//     });
// };


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.status(400).json(err);
    });
});