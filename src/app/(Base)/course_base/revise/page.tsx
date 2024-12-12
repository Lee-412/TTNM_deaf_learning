"use client";
import ReviseContent from "@/components/courses_base/revise_content/ReviseContent";

const Revise = (props: any) => {
  let reviseName = sessionStorage.getItem("reviseName") || "";

  let reviseData = JSON.parse(sessionStorage.getItem("reviseData") || "[]");


  return <ReviseContent data={reviseData} name={reviseName} />;
};

export default Revise;
