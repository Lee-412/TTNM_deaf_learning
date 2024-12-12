"use client";

import ReviseResult from "@/components/courses_base/revise_result/ReviseResult";

const ReviseResultPage = (props: any) => {

    let reviseData = JSON.parse(sessionStorage.getItem("reviseData") || "[]");
    let selectedAnswer = JSON.parse(sessionStorage.getItem("selectedAnswer") || "[]");
    let numberCorrectAnswer = JSON.parse(sessionStorage.getItem("numberCorrectAnswer") || "0");

    return (
        <ReviseResult data={reviseData} selectedAnswer={selectedAnswer} numberCorrectAnswer={numberCorrectAnswer} />
    );
}

export default ReviseResultPage;