var path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.post('/submit', (req,res) => {
        console.log(req.body);
        db.workout.insert(req.)
    })
};
