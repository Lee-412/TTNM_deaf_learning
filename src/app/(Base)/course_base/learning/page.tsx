'use client'
import LearningContent from "@/components/courses_base/learning_content/LearningContent";

const LearningCoursePage = () => {
    
    let learningName = sessionStorage.getItem("learningName") || "";
    
    let learningData = JSON.parse(sessionStorage.getItem("learningData") || "[]");
    console.log(">>>Checkdata:  ", learningData);
    console.log(">>>Checkname:  ", learningName);
  
    return (
        <LearningContent data={learningData} name={learningName} />
    );
}

export default LearningCoursePage;