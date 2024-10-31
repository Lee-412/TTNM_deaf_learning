"use client";
import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "./Category.module.css";
import { useRouter } from "next/navigation";

interface CategoryProps {
  title: string;
  data?: number;
  target: string;
}

const Category = (props: CategoryProps) => {
  const router = useRouter();
  const data = [
    {
      title: 'màu xanh',
      urlVideo: 'hello',
      type: 'danh từ'
    }
  ]
  const handleClickButton = (link: string) => {
    console.log(link);
    router.push(
      `/course_base/${link}?data=${JSON.stringify(data)}`
    )
  };

  const status = props.target === "Study" ? "learning" : "revise";

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Title order={3} className={classes.title}>
          {props.title}
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
