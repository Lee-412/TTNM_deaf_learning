import Link from "next/link";
import Category from "../category/Category";
import "./ReviseCourse.css";
import {ReviseData_vn} from "@/data/data";
import { Divider, Text } from "@mantine/core";

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
    <div className="revise-content-container">
    <Divider my="md" />
      <div className="revise-course-header">
        

        <Text className="revise-course-title">
          Chọn khóa học để ôn tập
        </Text>
        
      </div>
      <Divider my="md" color="blue" />

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
    >
      {courseListLearning}
    </div>
  </div>
  );
}

export default ReviseCourse;