import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  id : { type: String, required: true, unique: true },
  title : { type: String, required: true },
  course : { type: String, required: true },
},
   { collection: "assignments" })

export default assignmentSchema;