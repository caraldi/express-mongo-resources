'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    work: {
        type: String
    }
});

module.exports = mongoose.model('Painter', schema);