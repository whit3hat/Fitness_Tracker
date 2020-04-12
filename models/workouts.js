const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema for the workouts to be posted to the DB with the seed file
const workoutSchema = new Schema({
    type: { type: String, required: true},
    name: { type: String, required: true},
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});
//model used in the workouts seed file
var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;