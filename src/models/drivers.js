import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    },
    geometry: PointSchema
});

const model = mongoose.model('Driver', Schema);

export default model;