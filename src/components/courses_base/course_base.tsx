
import CourseContent from "./content/Course_content";
import { NavbarNested } from "./navbar/NavbarNested";



const CourseBase = () => {
    
    
    return (
        <div style={{display: "flex"}} >
            <div className="course-navbar">
            <NavbarNested />
            </div>
        
            <div className="course-content" style={{paddingLeft: "20px", paddingTop: "20px"}}>
                <div style={{textAlign: "center", color: "white"}}>
                    <h1> Khóa học </h1>
                </div>
                
            <CourseContent />
            </div>
        
        </div>
        
    );
    };
export default CourseBase;