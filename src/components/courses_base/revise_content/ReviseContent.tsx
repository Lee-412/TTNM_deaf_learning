"use client";

import { useEffect, useState } from "react";
import { Word, WordAndQuestion } from "../category/Category";
import "./ReviseContent.css";
import { Container } from "@mantine/core";

// Đây là nội dung của phần ôn tập
interface ReviseContentProps {
  data: WordAndQuestion[];
  name: string;
}

const ReviseContent = (props: ReviseContentProps) => {
  let { data, name } = props;
  name = name.substring(1, name.length - 1);

  let [wordIndex, setWordIndex] = useState(0);

  const handleNext = () => {
    if (wordIndex < data.length - 1) {
      setWordIndex((wordIndex) => wordIndex + 1);
    }
  };

  const handlePrev = () => {
    if (wordIndex > 0) {
      setWordIndex((wordIndex) => wordIndex - 1);
    }
  };

  const handleCheckAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === data[wordIndex].correctAnswer) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  };

  useEffect(() => {
    return () => {
      console.log(wordIndex);
    };
  }, [wordIndex]);

  return (
    <div className="revise-container">
      <div className="revise-content">
        <div className="revise-title">
          <span>{name}</span>
        </div>

        <div>
          <p>
            Hiện tại: {wordIndex + 1} / {data.length}
          </p>
        </div>

        <div className="revise-video">
          <Container className="video-container">
            <video
              controls
              key={data[wordIndex].id}
              className="video"
              style={{
                width: "100%",
                maxWidth: "1250px",
                height: "auto",
                border: "2px solid #ccc",
              }}
            >
              <source src={data[wordIndex].urlVideo} />
              {/* <source src={linkVideo} /> */}

              {/**
                  Vấn đề rõ ràng, chỉ thay đổi 1 dòng code ở đây là fix được hết.
            */}
            </video>
          </Container>
        </div>
      </div>

      <Container className="revise-question">
        <p style={{ textAlign: "center" }}>
          {data[wordIndex].question.substring(
            0,
            data[wordIndex].question.length - 2
          ) + "?"}
        </p>

        <div>
          <button className="answer-button" onClick={() => handleCheckAnswer(data[wordIndex].answer.answerA)}>{data[wordIndex].answer.answerA}</button>
        </div>

        <div>
          <button className="answer-button" onClick={() => handleCheckAnswer(data[wordIndex].answer.answerB)}>{data[wordIndex].answer.answerB}</button>
        </div>

        <div>
          <button className="answer-button" onClick={() => handleCheckAnswer(data[wordIndex].answer.answerC)}>{data[wordIndex].answer.answerC}</button>
        </div>

        <div>
          <button className="answer-button" onClick={() => handleCheckAnswer(data[wordIndex].answer.answerD)}>{data[wordIndex].answer.answerD}</button>
        </div>
      </Container>

      <button className="btn-prev" onClick={() => handlePrev()}>
        Prev{" "}
      </button>
      <button className="btn-next" onClick={() => handleNext()}>
        Next{" "}
      </button>
    </div>
  );
};

export default ReviseContent;
