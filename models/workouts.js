const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema for the workouts to be posted to the DB with the seed file
const workoutSchema = new Schema({
    day: { type: Date, default: Date.now},
    exercies: { type: Array, required: true},
    totalDuration: { type: Number, default: 0 }
});
//model used in the workouts seed file
var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;