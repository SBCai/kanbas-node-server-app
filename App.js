import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(cors({   credentials: true,
                 origin: process.env.FRONTEND_URL,}));
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)