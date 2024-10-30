'use client'
import CourseContent from "./content/Course_content";
import LearningContent from "./learning_content/LearningContent";
import { NavbarNested } from "./navbar/NavbarNested";
import ReviewCourse from "./review_course/ReviewCourse";
import { useState } from "react";

const CourseBase = () => {

    const [course, setCourse] = useState(true);
    const [review, setReview] = useState(false);
    const [learning, setLearning] = useState(false);
    
    const handleShowCourse = () => {
        if (course === true) { return <CourseContent /> }
        else if (review === true) { return <ReviewCourse /> }
        else if (learning === true) { return <LearningContent /> }
    }
    
    return (
        <div style={{display: "flex"}} >
            <div className="course-navbar">
            <NavbarNested />
            </div>
        
            <div className="course-content" style={{paddingLeft: "20px", paddingTop: "20px", width: "100%"}}>
                <div style={{textAlign: "center", color: "white"}}>
                    <h1> Khóa học </h1>
                </div>
                
                {handleShowCourse()};
            
            </div>
        
        </div>
        
    );
    };
export default CourseBase;
