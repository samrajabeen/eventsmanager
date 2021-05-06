var mongoose = require('mongoose');

// Event Schema
var EventSchema = mongoose.Schema({
    eventName: {
        type: String
    },
    eventStartTime: {
        type: Date
    },
    eventEndTime: {
        type: Date
    },
    eventDate: {
        type: Date
    },
    attending: [{
        
    }]    
});

var Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.createEvent = function (newEvent, callback) {
    newEvent.save(callback);
}
