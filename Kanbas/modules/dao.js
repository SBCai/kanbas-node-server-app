import model from "./model.js";

export const createModule = (module) => {
  delete module._id;
  const new_module = { ...module,
        id: new Date().getTime().toString() }
  return model.create(new_module);
}

export const findAllModules = ( cid ) => model.find({ course: cid });

export const findModuleById = ( mid ) => model.findOne({ id: mid });

export const updateModule = (moduleId, module) => model.updateOne({ id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });
