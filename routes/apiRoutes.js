var db = require('../models');

module.exports = function(app) {
    // app.get('', function(req, res) {
    //     db.Workout.find({}).then(function(dbWorkout) {
    //         res.json();
    //     });
    // });

    app.get('/api/workouts', (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

};
