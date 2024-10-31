import { Divider } from "@mantine/core";
import Category from "../category/Category";
import "./Course_content.css";
import Link from "next/link";

// Đây là trang khóa học

interface CourseProps {
  name: string;
  id?: number;
  target: string;
}

const CourseContent = () => {
  const courses: CourseProps[] = [
    {
      name: "Colors",
      id: 1,
      target: "Study",
    },
    { name: "Fruits", id: 2, target: "Study" },
    { name: "Food", id: 3, target: "Study" },
    { name: "Animals", id: 4, target: "Study" },
    { name: "Family", id: 5, target: "Study" },
  ];

  const courseListLearning = courses.map((course) => {
    return (
      <div key={course.id} className="course-category" style={{ width: "30%" }}>
        <Category title={course.name} data={course.id} target={course.target} />
      </div>
      
    );
  });

  return (
    <div className="course-content-container">
      <div style={{ textAlign: "center" }}>
        <h1 className="khoahoc" style={{fontFamily: "monospace", color: "#012970"}}> Khóa học </h1>
      </div>

      
      <ol className="breadcrumb" style={{fontFamily: "Lora, serif", fontSize:"16px"}}>
                <li className="breadcrumb-item">
                    <Link href={"/"} style={{textDecoration: "none", color: "#899BDD"}}>Trang chủ</Link>
                </li>
                <li className="breadcrumb-item active">
                  
                <Link href={"/"} style={{textDecoration: "none", color: "#2D2D2DBF"}}>Khóa học</Link>
                </li>
      </ol>
      

      <div className="base-content">{courseListLearning}</div>
    </div>
  );
};

export default CourseContent;
