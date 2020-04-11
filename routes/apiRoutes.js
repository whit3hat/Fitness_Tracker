var db = require('../models');

module.exports = function(app) {
    app.get('/api/workouts/range', function(req, res) {
        db.Workout.find({}).then(function(dbWorkout) {
            res.json(dbWorkout);
        });
    });

    app.post('/api/workouts', (req, res) => {
      db.Workout.create(req.body).then(function(dbWorkout) {
          res.json(dbWorkout)
      });
    });
};