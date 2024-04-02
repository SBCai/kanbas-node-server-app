import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("modulesModel", schema);
export default model;
