import Link from "next/link";
import Category from "../category/Category";
import "./ReviseCourse.css";
import {ReviseData_vn} from "@/data/data";

// Đây là trang ôn tập

interface CourseProps {
    name: string;
    id?: number;
    target: string;
}

const ReviseCourse = () => {
 

    const courseListLearning = ReviseData_vn.map((course) => {
        return (
            <div key={course.id} className="course-category" style={{width: "30%"}}>
                <Category name={course.name} id={course.id} target={course.target} data={course.data}/>
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