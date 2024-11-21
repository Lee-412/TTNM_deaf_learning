"use client";

import { use, useEffect, useState } from "react";
import "./LearningContent.css";
import { Word } from "../category/Category";
import { Container } from "@mantine/core";
import { link } from "fs";

// Đây là nội dung của phần học
interface LearningContentProps {
  data: Word[];
  name: string;
}

const LearningContent = (props: LearningContentProps) => {
  let { data, name } = props;
  name = name.substring(1, name.length - 1);

  const [wordIndex, setWordIndex] = useState(0);

  const [linkVideo, setLinkVideo] = useState(data[wordIndex].urlVideo);

  const handleNext = () => {
    if (wordIndex < data.length - 1) {
      console.log('check prev data', wordIndex);
      setWordIndex(wordIndex + 1);
      console.log('check data', wordIndex);
      setLinkVideo(data[wordIndex].urlVideo);
      console.log('check data', linkVideo);

      console.log(linkVideo, data[wordIndex].word);
    }
  };



  console.log('check out data', wordIndex);

  const handlePrev = () => {
    if (wordIndex > 0) {

      setWordIndex((wordIndex) => wordIndex - 1);
      setLinkVideo(data[wordIndex].urlVideo);
      console.log('check cur data', wordIndex, linkVideo);

    }
  };

  return (
    <div className="learning-container">
      <div className="learning-content">
        <div className="learning-title">
          <span>{name}</span>
        </div>

        
        <Container>
        <div className="learning-status">
          <span>
            Hiện tại: {wordIndex + 1} / {data.length}
          </span>
        </div>
        </Container>
        
        <Container className="learning-definition">
        
          <div className="word-type">
            {data[wordIndex].type}
          </div>
          <p style={{ textAlign: "center", textTransform: "capitalize" }}>{data[wordIndex].word}</p>
        </Container>

        <div className="learning">
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
                  Việc sử dụng 2 state để kiểm soát thêm data trong khi 1 state là đã đại diện cho việc thay đổi của 
                    toàn bộ data cần thiết
            */}
            </video>
          </Container>
        </div>
      </div>

      <button className="btn-prev" onClick={() => handlePrev()}>
        Prev{" "}
      </button>
      <button className="btn-next" onClick={() => handleNext()}>
        Next{" "}
      </button>
    </div>
  );
};

export default LearningContent;
