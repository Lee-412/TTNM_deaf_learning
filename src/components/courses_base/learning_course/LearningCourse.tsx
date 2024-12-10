'use client'
import { Divider, Text } from "@mantine/core";
import Category from "../category/Category";
import "./LearningCourse.css";
import Link from "next/link";
// import {LearningData_vn} from "@/data/data";
// Đây là trang khóa học

interface Courseinfo {
  id: any;
  name: any;
  target: any;
  data: any;
}

const LearningCourse = ({ leanrningDataVN }: any) => {

  console.log('check data', leanrningDataVN);

  const courseListLearning = leanrningDataVN.map((course: Courseinfo) => {
    console.log('check data course', course);


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
        <Divider my="md" />
        <div className="course-header">


          <Text className="course-title">
            Khóa học
          </Text>

        </div>
        <Divider my="md" color="blue" />
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

      <div className="base-content">
        {courseListLearning}
      </div>
    </div>
  );
};

export default LearningCourse;
