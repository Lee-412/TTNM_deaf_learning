"use client";

import { WordAndQuestion } from "@/components/courses_base/category/Category";
import ReviseResult from "@/components/courses_base/revise_result/ReviseResult";

const ReviseResultPage = (props: any) => {

    let reviseData = JSON.parse(sessionStorage.getItem("reviseData") || "[]");
    let selectedAnswer = JSON.parse(sessionStorage.getItem("selectedAnswer") || "[]");

    return (
        <ReviseResult data={reviseData} selectedAnswer={selectedAnswer}/>
    );
}

export default ReviseResultPage;