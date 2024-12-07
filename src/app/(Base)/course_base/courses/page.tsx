import LearningCourse from "@/components/courses_base/learning_course/LearningCourse";

const Courses = async () => {
  // const leanrningDataVN : any[] = await (await fetch("http://localhost:5001/courses")).json()
  const leanrningDataVN: any[] = await (await fetch("http://localhost:5002/courses")).json()


  console.log(leanrningDataVN);


  return (
    <div>
      <LearningCourse leanrningDataVN={leanrningDataVN} />

    </div>
  );
};
export default Courses;
