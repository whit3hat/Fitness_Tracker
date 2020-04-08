var db = require('../models');

module.exports = function(app) {
    app.get('', function(req, res) {
        db.Workout.find({}).then(function(dbWorkout) {
            res.json();
        });
    });

    app.put('', function(req, res){
        db.Workout.update({ _id: req.params.id }, {}).then(function() {
            res.json();
        });
    });
};