import { Container } from "@mantine/core";
import { Word, WordAndQuestion } from "../category/Category";
import "./ReviseResult.css";

interface ReviseResultProps {
  data: WordAndQuestion[];
  selectedAnswer: string[];
  numberCorrectAnswer: number;
}

const ReviseResult = (props: ReviseResultProps) => {
  let { data, selectedAnswer, numberCorrectAnswer } = props;

  console.log("check selected answer", selectedAnswer);

  const handleShowAnswer = (data: WordAndQuestion) => {
    if (selectedAnswer[data.id - 1] === data.correctAnswer) {
      return (
        <div>
          <span className="span-correct-answer">Correct Answer</span>
          <button className="btn-answer correct-answer">
            {data.correctAnswer}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <span className="span-wrong-answer">Wrong Answer!</span>
          <div>
            <button className="btn-answer selected-answer">
              {selectedAnswer[data.id - 1]}
            </button>
          </div>

          <div>
            <button className="btn-answer correct-answer">
              {data.correctAnswer}
            </button>
          </div>
        </div>
      );
    }
  };

  const handleShowResult = data.map((reviseQuestion) => {
    return (
      <Container className="revise-question" key={reviseQuestion.id}>
        <p>
          {"Câu " +
            reviseQuestion.id +
            ": " +
            reviseQuestion.question.substring(
              0,
              reviseQuestion.question.length - 2
            ) +
            "?"}
        </p>

        {handleShowAnswer(reviseQuestion)}

        <div className="revise-video">
          <Container className="video-container">
            <video
              controls
              key={reviseQuestion.id}
              className="video"
              style={{
                width: "100%",
                maxWidth: "80vw",
                height: "auto",
                border: "2px solid #ccc",
              }}
            >
              <source src={reviseQuestion.urlVideo} />
            </video>
          </Container>
        </div>

        
      </Container>
    );
  });

  return (
    <div className="revise-result-container">
      <div className="show-result">
        Your Result: {numberCorrectAnswer} / {data.length}
      </div>
      {handleShowResult}
    </div>
  );
};

export default ReviseResult;
