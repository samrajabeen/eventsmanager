var mongoose = require('mongoose');

// Event Schema
var EventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },
    eventTime: {
        type: String
    },
    eventDate: {
        type: String
    }    
});

var Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.createEvent = function (newEvent, callback) {
    newEvent.save(callback);
}
