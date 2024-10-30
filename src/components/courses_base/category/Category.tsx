import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './Category.module.css';

interface CategoryProps {
    title: string;
    data?: number;
    }

const Category = (props: CategoryProps, btn_name: string) => {
    
  

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        
        <Title order={3} className={classes.title}>
            {props.title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Study Now
      </Button>
    </Paper>
  );
}

export default Category;