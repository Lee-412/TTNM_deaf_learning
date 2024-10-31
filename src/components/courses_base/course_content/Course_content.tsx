import { Divider } from "@mantine/core";
import Category from "../category/Category";

// Đây là trang khóa học

interface CourseProps {
  name: string;
  id?: number;
  target: string;
}

// data fake
interface LearningData {
  name: string;
  id?: number;
  target: string;
  data: [   // số lượng từ sẽ là data.length
    // trong data thì mỗi object sẽ là 1 từ,           
    {
      id: number;
      word: string;
      type: string;
      urlVideo: string;
    },
  ];
}

interface ReviseData {
  name: string;
  id?: number;
  target: string;
  data: [   // số lượng từ sẽ là data.length
    // trong data thì mỗi object sẽ là 1 từ,           
    {
      id: number;
      word: string;
      type: string;
      urlVideo: string;
      question: string;
      answer: {
        answerA: string,
        answerB: string,
        answerC: string,
        answerD: string,
      },
      correctAnswer: string
    },
  ];
}

const CourseContent = () => {
  const courses: CourseProps[] = [
    {
      name: "Colors",
      id: 1,
      target: "Study"
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
    <div>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1> Khóa học </h1>
      </div>

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
};

export default CourseContent;
