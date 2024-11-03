import { Divider } from "@mantine/core";
import Category from "../category/Category";
import "./Course_content.css";
import Link from "next/link";

// Đây là trang khóa học

const CourseContent = () => {
  const LearningData_vn = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Study',
        data: [
            { id: 1, word: 'màu xanh da trời', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02142B.mp4' },
            { id: 2, word: 'màu xanh lá cây', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02143B.mp4' },
            { id: 3, word: 'màu trắng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02140B.mp4' },
            { id: 4, word: 'màu đỏ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02134.mp4' },
            { id: 5, word: 'màu nâu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02137B.mp4' },
            { id: 6, word: 'màu cam', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02132.mp4' },
            { id: 7, word: 'màu đen', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02133B.mp4' }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Study',
        data: [
            { id: 11, word: 'quả chuối', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02730.mp4' },
            { id: 12, word: 'quả chanh', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02728.mp4' },
            { id: 13, word: 'quả nho', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02749.mp4' },
            { id: 14, word: 'quả lê', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02744.mp4' },
            { id: 15, word: 'quả táo', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02757B.mp4' }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Study',
        data: [
            { id: 16, word: 'pizza', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00140.mp4' },
            { id: 17, word: 'hộp sữa', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01704.mp4' },
            { id: 18, word: 'hamburger', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0391.mp4' },
            { id: 19, word: 'trứng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03659B.mp4' },
            { id: 20, word: 'kẹo', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01743B.mp4' }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Study',
        data: [
            { id: 21, word: 'nhân viên', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0004.mp4' },
            { id: 22, word: 'nghệ sĩ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02356.mp4' },
            { id: 23, word: 'kiến trúc sư', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W01887.mp4' },
            { id: 25, word: 'đạo diễn', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0093.mp4' }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'Study',
        data: [
            { id: 26, word: 'con mèo', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00772B.mp4' },
            { id: 27, word: 'con chó', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00739B.mp4' },
            { id: 28, word: 'con chim', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00738.mp4' },
            { id: 29, word: 'con ngựa', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00778B.mp4' },
            { id: 30, word: 'con bò', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00735B.mp4' },
            { id: 31, word: 'con cừu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00751.mp4' },
            { id: 32, word: 'con lợn', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00770B.mp4' },
            { id: 33, word: 'sâu bọ, côn trùng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02944.mp4' }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Study',
        data: [
            { id: 34, word: 'ban ngày', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00089.mp4' },
            { id: 35, word: 'ban đêm', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00086B.mp4' },
            { id: 36, word: 'tuần', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03685B.mp4' },
            { id: 37, word: 'tháng', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W03167B.mp4' },
            { id: 38, word: 'tương lai', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/D0288.mp4' },
            { id: 39, word: 'mùa xuân', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02272B.mp4' },
            { id: 40, word: 'mùa hạ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02270B.mp4' },
            { id: 41, word: 'mùa thu', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02271.mp4' },
            { id: 42, word: 'mùa đông', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02269.mp4' }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Study',
        data: [
            { id: 43, word: 'mẹ', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W02110.mp4' },
            { id: 44, word: 'bố', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00325.mp4' },
            { id: 45, word: 'chú', type: 'danh từ', urlVideo: 'https://qipedc.moet.gov.vn/videos/W00506.mp4' }
        ]
    }
]
  const lengthL = LearningData_vn.length;
  console.log(lengthL, "con cec");

  const courseListLearning = LearningData_vn.map((course) => {
    
    return (
      <div key={course.id} className="course-category" style={{ width: "30%" }}>
        <Category name={course.name} id={course.id} target={course.target} data={course.data}/>
      </div>
      
    );
  });

  return (
    <div className="course-content-container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{fontFamily: "monospace", color: "#012970"}}> Khóa học </h1>
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
