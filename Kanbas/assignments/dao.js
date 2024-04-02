import model from "./model.js";

export const createAssignment = (assignment) => {
  delete assignment._id;
  const new_assignment = { ...assignment,
        id: new Date().getTime().toString()}
  return model.create(new_assignment);
}

export const findAllAssignments = (cid) => model.find({ course: cid });

export const findAssignmentById = (aid) => model.findOne({ id: aid });

export const updateAssignment = (aid, assignment) => model.updateOne({ id: aid }, { $set: assignment });

export const deleteAssignment = ( aid ) => model.deleteOne({ id: aid });