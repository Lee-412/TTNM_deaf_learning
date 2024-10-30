import Category from "../category/Category";

interface CourseProps {
    name: string;
    id?: number;
}

const ReviewCourse = () => {
    const courses: CourseProps[] = [
        {name: "Colors", id: 1},
        {name: "Fruits", id: 2},
        {name: "Food", id: 3},
        {name: "Animals", id: 4},
        {name: "Family", id: 5},
    ]

    const courseListLearning = courses.map((course) => {
        return (
            <div key={course.id} className="course-category" style={{width: "30%"}}>
                <Category title={course.name} data={course.id}/>
            </div>
        )
        
    }); 

  return (
        <div  className="base-content" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: "5vw",
            flex: "1 1 auto", gap: "25px"
        }}>
            {courseListLearning}
        </div>
  );
}

export default ReviewCourse;