var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var eventSchema = new Schema({
    id: [{type: Schema.Types.ObjectId, ref: 'Course'}],
    description: {
        type: String,
    },
    deadLine: {
        type: Date,
        required: true
    },
});
module.exports = mongoose.model('event', eventSchema);