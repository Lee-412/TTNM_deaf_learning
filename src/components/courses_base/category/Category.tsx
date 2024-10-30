'use client'

import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './Category.module.css';
import { useRouter } from 'next/navigation';

interface CategoryProps {
    title: string;
    data?: number;
    }

const Category = (props: CategoryProps, btn_name: string) => {
    
  const router = useRouter();

    const handleClickButton = (link: string) => {
        console.log(link);
        router.push(`/course_base/${link}`);
    }
  

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        
        <Title order={3} className={classes.title}>
            {props.title}
        </Title>
      </div>
      <Button variant="white" color="dark"
      onClick={() => handleClickButton("learning")}>
        Study Now
      </Button>
    </Paper>
  );
}

export default Category;