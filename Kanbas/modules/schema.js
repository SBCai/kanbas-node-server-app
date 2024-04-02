import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String },
  course: { type: String },
  lessons: [{
    id: { type: String },
    name: { type: String },
    description: { type: String },
    module: { type: String },
  }]
}, { collection: "modules" });

export default modulesSchema;