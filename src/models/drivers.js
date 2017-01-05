import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    }
})

const model = mongoose.model('Driver', Schema);

export default model;