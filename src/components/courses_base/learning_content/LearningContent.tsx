'use client'

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

      setWordIndex(wordIndex + 1);
      setLinkVideo(data[wordIndex].urlVideo);
      console.log(linkVideo, data[wordIndex].word);

    }

  }

  const handlePrev = () => {

    if (wordIndex > 0) {
      setWordIndex(wordIndex => wordIndex - 1);
      setLinkVideo(data[wordIndex].urlVideo);
    }
  }




  return (
    <div className="learning-container">
      <div className="learning-content">
        <div className="learning-title">
          <span>{name}</span>
        </div>

        <div>
          <p>Hiện tại: {wordIndex + 1}  /  {data.length}</p>
        </div>

        <Container className="learning-definition">
          <p style={{ textAlign: "center" }}>{data[wordIndex].word}</p>
          <p style={{ textAlign: "center" }}>{data[wordIndex].type}</p>
        </Container>

        <div className="learning">
          <Container className="video-container" >
            <video controls
              key={data[wordIndex].id}

              className="video"
              style={{ width: '100%', maxWidth: '1250px', height: 'auto', border: '2px solid #ccc' }}
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

      <button className="btn-prev" onClick={() => handlePrev()}>Prev </button>
      <button className="btn-next" onClick={() => handleNext()}>Next </button>

    </div>
  );
};

export default LearningContent;
