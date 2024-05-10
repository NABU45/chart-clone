import mongoose from "mongoose";

const studentChartSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    attendance: {
        type: Number,
        required: true
    },
});

const studentChart = mongoose.model("StudentChart", studentChartSchema);

export default studentChart;
