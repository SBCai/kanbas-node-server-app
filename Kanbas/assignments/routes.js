import * as dao from "./dao.js";

function AssignmentRoutes(app) {
  const createAssignment = async (req, res) => {
    const { cid } = req.params;
    const assignmentWithCid = { ...req.body, course: cid };
    const assignment = await dao.createAssignment(assignmentWithCid);
    res.json(assignment);
  }

  const findAllAssignments = async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAllAssignments(cid);
    res.json(assignments);
  }

  const findAssignmentById = async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.aid);
    res.json(assignment);
  }

  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  }

  const deleteAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.json(status);
  }

  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findAllAssignments);
  app.get("/api/assignments/:aid", findAssignmentById);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}

export default AssignmentRoutes;