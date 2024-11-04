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
  const ReviseData_vn = [
    {
        name: 'Màu sắc',
        id: 1,
        target: 'Revise',
        data: [
            {
                id: 1,
                word: 'màu xanh da trời',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02142B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh da trời'
                },
                correctAnswer: 'màu xanh da trời'
            },
            {
                id: 2,
                word: 'màu xanh lá cây',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02143B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu xanh lá cây',
                    answerB: 'màu đen',
                    answerC: 'màu cam',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu xanh lá cây'
            },
            {
                id: 3,
                word: 'màu trắng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02140B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu cam',
                    answerC: 'màu trắng',
                    answerD: 'màu đen'
                },
                correctAnswer: 'màu trắng'
            },
            {
                id: 4,
                word: 'màu đỏ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02134.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đỏ',
                    answerB: 'màu xanh lá cây',
                    answerC: 'màu trắng',
                    answerD: 'màu nâu'
                },
                correctAnswer: 'màu đỏ'
            },
            {
                id: 5,
                word: 'màu nâu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02137B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu nâu',
                    answerC: 'màu xanh da trời',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu nâu'
            },
            {
                id: 6,
                word: 'màu cam',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02132.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu cam',
                    answerB: 'màu đỏ',
                    answerC: 'màu trắng',
                    answerD: 'màu xanh lá cây'
                },
                correctAnswer: 'màu cam'
            },
            {
                id: 7,
                word: 'màu đen',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02133B.mp4',
                question: 'Đây là màu sắc nào"?',
                answer: {
                    answerA: 'màu đen',
                    answerB: 'màu trắng',
                    answerC: 'màu đỏ',
                    answerD: 'màu cam'
                },
                correctAnswer: 'màu đen'
            }
        ]
    },
    {
        name: 'Trái cây',
        id: 2,
        target: 'Revise',
        data: [
            {
                id: 11,
                word: 'quả chuối',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02730.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả chuối',
                    answerC: 'quả nho',
                    answerD: 'quả lê'
                },
                correctAnswer: 'quả chuối'
            },
            {
                id: 12,
                word: 'quả chanh',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02728.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả lê',
                    answerC: 'quả chanh',
                    answerD: 'quả nho'
                },
                correctAnswer: 'quả chanh'
            },
            {
                id: 13,
                word: 'quả nho',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02749.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả chuối',
                    answerB: 'quả nho',
                    answerC: 'quả táo',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả nho'
            },
            {
                id: 14,
                word: 'quả lê',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02744.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả lê',
                    answerB: 'quả táo',
                    answerC: 'quả nho',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả lê'
            },
            {
                id: 15,
                word: 'quả táo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02757B.mp4',
                question: 'Đây là loại trái cây nào?',
                answer: {
                    answerA: 'quả táo',
                    answerB: 'quả nho',
                    answerC: 'quả chuối',
                    answerD: 'quả chanh'
                },
                correctAnswer: 'quả táo'
            }
        ]
    },
    {
        name: 'Thức ăn',
        id: 3,
        target: 'Revise',
        data: [
            {
                id: 19,
                word: 'trứng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03659B.mp4',
                question: 'Đây là loại đồ ăn nào?',
                answer: {
                    answerA: 'trứng',
                    answerB: 'pizza',
                    answerC: 'hamburger',
                    answerD: 'kẹo'
                },
                correctAnswer: 'trứng'
            },
            {
                id: 20,
                word: 'kẹo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W01743B.mp4',
                question: 'Đây là loại đồ ăn nào?',
                answer: {
                    answerA: 'pizza',
                    answerB: 'trứng',
                    answerC: 'hamburger',
                    answerD: 'kẹo'
                },
                correctAnswer: 'kẹo'
            }
        ]
    },
    {
        name: 'Công việc',
        id: 4,
        target: 'Revise',
        data: [
            {
                id: 21,
                word: 'nhân viên',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0004.mp4',
                question: 'Công việc nào có tên gọi là "nhân viên"?',
                answer: {
                    answerA: 'nghệ sĩ',
                    answerB: 'kiến trúc sư',
                    answerC: 'nhân viên',
                    answerD: 'đạo diễn'
                },
                correctAnswer: 'nhân viên'
            },
            {
                id: 22,
                word: 'nghệ sĩ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02356.mp4',
                question: 'Công việc nào có tên gọi là "nghệ sĩ"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'nghệ sĩ'
            },
            {
                id: 23,
                word: 'kiến trúc sư',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W01887.mp4',
                question: 'Công việc nào có tên gọi là "kiến trúc sư"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'kiến trúc sư'
            },
            {
                id: 25,
                word: 'đạo diễn',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0093.mp4',
                question: 'Công việc nào có tên gọi là "đạo diễn"?',
                answer: {
                    answerA: 'đạo diễn',
                    answerB: 'nghệ sĩ',
                    answerC: 'kiến trúc sư',
                    answerD: 'nhân viên'
                },
                correctAnswer: 'đạo diễn'
            }
        ]
    },
    {
        name: 'Động vật',
        id: 5,
        target: 'StuRevisedy',
        data: [
            {
                id: 26,
                word: 'con mèo',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00772B.mp4',
                question: 'Con vật nào có tên gọi là "con mèo"?',
                answer: {
                    answerA: 'con chó',
                    answerB: 'con mèo',
                    answerC: 'con chim',
                    answerD: 'con bò'
                },
                correctAnswer: 'con mèo'
            },
            {
                id: 27,
                word: 'con chó',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00739B.mp4',
                question: 'Con vật nào có tên gọi là "con chó"?',
                answer: {
                    answerA: 'con mèo',
                    answerB: 'con chim',
                    answerC: 'con chó',
                    answerD: 'con lợn'
                },
                correctAnswer: 'con chó'
            },
            {
                id: 28,
                word: 'con chim',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00738.mp4',
                question: 'Con vật nào có tên gọi là "con chim"?',
                answer: {
                    answerA: 'con bò',
                    answerB: 'con lợn',
                    answerC: 'con ngựa',
                    answerD: 'con chim'
                },
                correctAnswer: 'con chim'
            },
            {
                id: 29,
                word: 'con ngựa',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00778B.mp4',
                question: 'Con vật nào có tên gọi là "con ngựa"?',
                answer: {
                    answerA: 'con ngựa',
                    answerB: 'con cừu',
                    answerC: 'con bò',
                    answerD: 'con lợn'
                },
                correctAnswer: 'con ngựa'
            },
            {
                id: 30,
                word: 'con bò',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00735B.mp4',
                question: 'Con vật nào có tên gọi là "con bò"?',
                answer: {
                    answerA: 'con lợn',
                    answerB: 'con bò',
                    answerC: 'con cừu',
                    answerD: 'con ngựa'
                },
                correctAnswer: 'con bò'
            },
            {
                id: 31,
                word: 'con cừu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00751.mp4',
                question: 'Con vật nào có tên gọi là "con cừu"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con ngựa',
                    answerC: 'con lợn',
                    answerD: 'con bò'
                },
                correctAnswer: 'con cừu'
            },
            {
                id: 32,
                word: 'con lợn',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00770B.mp4',
                question: 'Con vật nào có tên gọi là "con lợn"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con lợn',
                    answerC: 'con bò',
                    answerD: 'con ngựa'
                },
                correctAnswer: 'con lợn'
            },
            {
                id: 33,
                word: 'sâu bọ, côn trùng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02944.mp4',
                question: 'Loài nào có tên gọi là "sâu bọ, côn trùng"?',
                answer: {
                    answerA: 'con cừu',
                    answerB: 'con ngựa',
                    answerC: 'sâu bọ, côn trùng',
                    answerD: 'con bò'
                },
                correctAnswer: 'sâu bọ, côn trùng'
            }
        ]
    },
    {
        name: 'Thời gian',
        id: 6,
        target: 'Study',
        data: [
            {
                id: 34,
                word: 'ban ngày',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00089.mp4',
                question: 'Thời gian nào có tên gọi là "ban ngày"?',
                answer: {
                    answerA: 'ban đêm',
                    answerB: 'ban ngày',
                    answerC: 'mùa hạ',
                    answerD: 'mùa xuân'
                },
                correctAnswer: 'ban ngày'
            },
            {
                id: 35,
                word: 'ban đêm',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00086B.mp4',
                question: 'Thời gian nào có tên gọi là "ban đêm"?',
                answer: {
                    answerA: 'ban ngày',
                    answerB: 'mùa đông',
                    answerC: 'ban đêm',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'ban đêm'
            },
            {
                id: 36,
                word: 'tuần',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03685B.mp4',
                question: 'Đơn vị thời gian nào có tên gọi là "tuần"?',
                answer: {
                    answerA: 'tháng',
                    answerB: 'tuần',
                    answerC: 'ngày',
                    answerD: 'giờ'
                },
                correctAnswer: 'tuần'
            },
            {
                id: 37,
                word: 'tháng',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W03167B.mp4',
                question: 'Đơn vị thời gian nào có tên gọi là "tháng"?',
                answer: {
                    answerA: 'tuần',
                    answerB: 'tháng',
                    answerC: 'năm',
                    answerD: 'giây'
                },
                correctAnswer: 'tháng'
            },
            {
                id: 38,
                word: 'tương lai',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/D0288.mp4',
                question: 'Thuộc về thời gian nào?',
                answer: {
                    answerA: 'quá khứ',
                    answerB: 'hiện tại',
                    answerC: 'tương lai',
                    answerD: 'ngày'
                },
                correctAnswer: 'tương lai'
            },
            {
                id: 39,
                word: 'mùa xuân',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02272B.mp4',
                question: 'Mùa nào có tên gọi là "mùa xuân"?',
                answer: {
                    answerA: 'mùa thu',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa xuân'
            },
            {
                id: 40,
                word: 'mùa hạ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02270B.mp4',
                question: 'Mùa nào có tên gọi là "mùa hạ"?',
                answer: {
                    answerA: 'mùa đông',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'mùa hạ'
            },
            {
                id: 41,
                word: 'mùa thu',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02271.mp4',
                question: 'Mùa nào có tên gọi là "mùa thu"?',
                answer: {
                    answerA: 'mùa thu',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa đông'
                },
                correctAnswer: 'mùa thu'
            },
            {
                id: 42,
                word: 'mùa đông',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02269.mp4',
                question: 'Mùa nào có tên gọi là "mùa đông"?',
                answer: {
                    answerA: 'mùa đông',
                    answerB: 'mùa xuân',
                    answerC: 'mùa hạ',
                    answerD: 'mùa thu'
                },
                correctAnswer: 'mùa đông'
            }
        ]
    },
    {
        name: 'Gia đình',
        id: 7,
        target: 'Revise',
        data: [
            {
                id: 43,
                word: 'mẹ',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W02110.mp4',
                question: 'Ai là người mẹ?',
                answer: {
                    answerA: 'bố',
                    answerB: 'chú',
                    answerC: 'mẹ',
                    answerD: 'anh'
                },
                correctAnswer: 'mẹ'
            },
            {
                id: 44,
                word: 'bố',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00325.mp4',
                question: 'Ai là người bố?',
                answer: {
                    answerA: 'chú',
                    answerB: 'bố',
                    answerC: 'anh',
                    answerD: 'mẹ'
                },
                correctAnswer: 'bố'
            },
            {
                id: 45,
                word: 'chú',
                type: 'danh từ',
                urlVideo: 'https://qipedc.moet.gov.vn/videos/W00506.mp4',
                question: 'Ai là người chú?',
                answer: {
                    answerA: 'bố',
                    answerB: 'chú',
                    answerC: 'anh',
                    answerD: 'mẹ'
                },
                correctAnswer: 'chú'
            }
        ]
    }

]

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