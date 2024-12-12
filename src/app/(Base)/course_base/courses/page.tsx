import LearningCourse from "@/components/courses_base/learning_course/LearningCourse";
import { LearningData_vn } from "@/data/data";

const Courses = async () => {
  const leanrningDataVN = LearningData_vn


  return (
    <div>
      <LearningCourse leanrningDataVN={leanrningDataVN} />

    </div>
  );
};
export default Courses;
