import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const moduleWithCid = { ...req.body, course: cid };
    const module = await dao.createModule(moduleWithCid);
    res.json(module);
  }

  const findAllModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModules(cid);
    res.json(modules);
  }

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.mid);
    res.json(module);
  }

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  }

  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findAllModules);
  app.get("/api/modules/:mid", findModuleById);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}

export default ModuleRoutes;