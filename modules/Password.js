const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Password', passwordSchema);

