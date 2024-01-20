import mongoose, { mongo } from "mongoose";

const gradesSchema = new mongoose.Schema({
    scores: [{
        score_type: String,
        score: Number
    }],
    class_id: {
        type: Number,
        required: true
    },
    learner_id: {
        type: Number,
        required: true
    },
}, {timestamps: true});

export default mongoose.model('Grades', gradesSchema);