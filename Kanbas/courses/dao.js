import model from "./model.js";

export const createCourse = (course) => {
  delete course._id;
  const new_course = { ...course,
        id: new Date().getTime().toString() }
  return model.create(new_course);
}

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.findOne({ id : courseId });

export const updateCourse = (courseId, course) => model.updateOne({ id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.deleteOne({ id: courseId });