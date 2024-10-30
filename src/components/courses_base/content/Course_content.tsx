import { Divider } from "@mantine/core";
import Category from "../category/Category";

interface CourseProps {
    name: string;
    data?: number;
}

const CourseContent = () => {
    const courses: CourseProps[] = [
        {name: "Colors", data: 1},
        {name: "Fruits", data: 2},
        {name: "Food", data: 3},
        {name: "Animals", data: 4},
        {name: "Family", data: 5},
    ]

    const courseList = courses.map((course) => {
        return (
            <div className="course-category" style={{width: "30%"}}>
                <Category title={course.name} data={course.data}/>
            </div>
        )
        
    }); 

  return (
        <div className="base-content" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: "5vw",
            flex: "1 1 auto", gap: "25px"
        }}>
            {courseList}
        </div>
  );
}

export default CourseContent;