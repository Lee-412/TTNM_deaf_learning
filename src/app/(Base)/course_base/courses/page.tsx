import LearningCourse from "@/components/courses_base/learning_course/LearningCourse";
import { LearningData_vn } from "@/data/data";

const Courses = async () => {
  // const leanrningDataVN : any[] = await (await fetch("http://localhost:5001/courses")).json()
  // const leanrningDataVN: any[] = await (await fetch("http://localhost:5002/courses")).json()

  const leanrningDataVN = LearningData_vn
  console.log(leanrningDataVN);


  return (
    <div>
      <LearningCourse leanrningDataVN={leanrningDataVN} />

    </div>
  );
};
export default Courses;
