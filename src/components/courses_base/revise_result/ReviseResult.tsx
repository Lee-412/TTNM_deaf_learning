import { Container } from "@mantine/core";
import { WordAndQuestion } from "../category/Category";
import "./ReviseResult.css";

interface ReviseResultProps {
  data: WordAndQuestion[];
  selectedAnswer: string[];
}

const ReviseResult = (props: ReviseResultProps) => {
  let { data, selectedAnswer } = props;

  const wordIndex = data.length;

  const handleShowResult = data.map((reviseQuestion) => {
    return (
      <Container className="revise-question" key={reviseQuestion.id}>
        <p>
          {"Cau " + reviseQuestion.id + " " + reviseQuestion.question.substring(
            0,
            reviseQuestion.question.length - 2
          ) + "?"}
        </p>

        <div>
          <button
            className="answer-button"
          >
            {reviseQuestion.answer.answerA}
          </button>
        </div>

        <div>
          <button
            className="answer-button"
          >
            {reviseQuestion.answer.answerB}
          </button>
        </div>

        <div>
          <button
            className="answer-button"
          >
            {reviseQuestion.answer.answerC}
          </button>
        </div>

        <div>
          <button
            className="answer-button"
          >
            {reviseQuestion.answer.answerD}
          </button>
        </div>
      </Container>
    );
  });

  return (
    <div className="correct-answer">
      {handleShowResult}
    </div>
  );
};

export default ReviseResult;
