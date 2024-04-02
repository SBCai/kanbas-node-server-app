import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id : { type: String, required: true, unique: true },
  name : { type: String, required: true },
  number : { type: String, required: true },
  startDate : { type: Date, required: true },
  endDate : { type: Date, required: true },
  department : { type: String, required: true },
  credit : { type: Number, required: true },
  description : String,
},
   { collection: "courses" })

export default courseSchema;