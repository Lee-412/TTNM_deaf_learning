import { Divider } from "@mantine/core";
import Category from "../category/Category";
import "./LearningCourse.css";
import Link from "next/link";
import {LearningData_vn} from "@/data/data";

// Đây là trang khóa học

const LearningCourse = () => {
  
  const lengthL = LearningData_vn.length;

  const courseListLearning = LearningData_vn.map((course) => {
    return (
      <div key={course.id} className="course-category" style={{ width: "30%" }}>
        <Category
          name={course.name}
          id={course.id}
          target={course.target}
          data={course.data}
        />
      </div>
    );
  });

  return (
    <div className="course-content-container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "monospace", color: "#012970" }}>
          {" "}
          Khóa học{" "}
        </h1>
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
            Khóa học
          </Link>
        </li>
      </ol>

      <div className="base-content">{courseListLearning}</div>
    </div>
  );
};

export default LearningCourse;
