import Link from "next/link";
import Category from "../category/Category";
import "./ReviseCourse.css";

// Đây là trang ôn tập

interface CourseProps {
    name: string;
    id?: number;
    target: string;
}

const ReviseCourse = () => {
    const courses: CourseProps[] = [
        {name: "Colors", id: 1, target: "Revise"},
        {name: "Fruits", id: 2, target: "Revise"},
        {name: "Food", id: 3, target: "Revise"},
        {name: "Animals", id: 4, target: "Revise"},
        {name: "Family", id: 5, target: "Revise"},
    ]

    const courseListLearning = courses.map((course) => {
        return (
            <div key={course.id} className="course-category" style={{width: "30%"}}>
                <Category title={course.name} data={course.id} target={course.target}/>
            </div>
        )
        
    }); 

  return (
    <div>
    <div style={{ textAlign: "center", fontFamily: "monospace", color: "#012970"}}>
      <h1> Chọn chủ đề ôn tập </h1>
    </div>

    <ol
        className="breadcrumb"
        style={{ fontFamily: "Lora, serif", fontSize: "16px" }}
      >
        <li className="breadcrumb-item">
          <Link href={"/"} style={{ textDecoration: "none", color: "#899BDD" }}>
            Trang chủ
          </Link>
        </li>
        <li className="breadcrumb-item active">
          <Link
            href={"/"}
            style={{ textDecoration: "none", color: "#2D2D2DBF" }}
          >
            Ôn tập
          </Link>
        </li>
      </ol>

    <div
      className="base-content"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginLeft: "2vw",
        flex: "1 1 auto",
        gap: "25px",
      }}
    >
      {courseListLearning}
    </div>
  </div>
  );
}

export default ReviseCourse;