"use client";
import CourseContent from "./course_content/Course_content";
import LearningContent from "./learning_content/LearningContent";
import { NavbarNested } from "./navbar/NavbarNested";
import ReviewCourse from "./revise_course/ReviseCourse";
import { useState } from "react";

const CourseBase = () => {
  return (
    <>
      <CourseContent />
    </>
  );
};
export default CourseBase;
