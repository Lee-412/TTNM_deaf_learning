'use client'
import { Word } from "@/components/courses_base/category/Category";
import LearningContent from "@/components/courses_base/learning_content/LearningContent";
import { useEffect } from "react";

const LearningCoursePage = (props: any) => {
    
    let learningName = sessionStorage.getItem("learningName") || "";
    
    let learningData = JSON.parse(sessionStorage.getItem("learningData") || "[]");
    console.log(">>>Checkdata:  ", learningData);
    console.log(">>>Checkname:  ", learningName);
  
    return (
        <LearningContent data={learningData} name={learningName} />
    );
}

export default LearningCoursePage;