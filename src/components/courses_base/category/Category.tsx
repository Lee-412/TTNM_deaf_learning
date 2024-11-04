"use client";
import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "./Category.module.css";
import { useRouter } from "next/navigation";

interface LearningData {
  name: string;
  id?: number;
  target: string;
  data: Word[];
}

interface ReviseData {
  name: string;
  id?: number;
  target: string;
  data: WordAndQuestion[];
}

export interface Word {
  id: number;
  word: string;
  type: string;
  urlVideo: string;
}

export interface Question {
  question: string;
  answer: {
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
  };
  correctAnswer: string;
}

export interface WordAndQuestion {
  id: number;
  word: string;
  type: string;
  urlVideo: string;
  question: string;
  answer: {
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
  };
  correctAnswer: string;
}

const Category = (props: LearningData | ReviseData) => {
  const router = useRouter();

  const status = props.target === "Study" ? "learning" : "revise";

  const handleClickButton = (link: string) => {
    if (props.target === "Study") {
      sessionStorage.setItem("learningData", JSON.stringify(props.data));

      sessionStorage.setItem("learningName", JSON.stringify(props.name));

      console.log(props.name);
      router.push(`/course_base/${link}?data=${JSON.stringify(props.id)}`);
    } else if (props.target === "Revise") {
      sessionStorage.setItem("reviseData", JSON.stringify(props.data));

      sessionStorage.setItem("reviseName", JSON.stringify(props.name));

      console.log(props.name);
      router.push(`/course_base/${link}?data=${JSON.stringify(props.id)}`);
    }
  };

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Title order={3} className={classes.title}>
          {props.name}
        </Title>
      </div>
      <Button
        variant="white"
        color="dark"
        className={classes.button}
        onClick={() => handleClickButton(status)}
      >
        {props.target === "Study" ? "Vào học" : "Ôn tập"}
      </Button>
    </Paper>
  );
};

export default Category;
