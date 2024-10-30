'use client'
import CourseContent from "./content/Course_content";
import LearningContent from "./learning_content/LearningContent";
import { NavbarNested } from "./navbar/NavbarNested";
import ReviewCourse from "./review_course/ReviewCourse";
import { useState } from "react";

const CourseBase = () => {

    
    return (
        <>
            <CourseContent />
        </>
        
    );
    };
export default CourseBase;
