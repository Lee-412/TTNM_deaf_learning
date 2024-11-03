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

export interface Word {
  id: number;
  word: string;
  type: string;
  urlVideo: string;
}

const Category = (props: LearningData) => {
  const router = useRouter();
  const handleClickButton = (link: string) => {
    sessionStorage.setItem(
      "learningData",
      JSON.stringify(props.data)
    );

    sessionStorage.setItem(
      "learningName",
      JSON.stringify(props.name)
    );

    console.log(props.name);
    router.push(`/course_base/${link}?data=${JSON.stringify(props.id)}`);
  };

  const status = props.target === "Study" ? "learning" : "revise";

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
