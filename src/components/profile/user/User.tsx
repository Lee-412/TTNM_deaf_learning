'use client'
import { Avatar, Button, Paper, Text } from '@mantine/core';
import classes from './User.module.css';

const user = {
  name: 'Baby Boo',
  email: 'signlearn@gmail.com'
}

const User = () => {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" className={classes.paper} >
      <Text ta="center" fz="lg" fw={500} mt="md" style={{paddingBottom:"20px"}}>
        Personal Detail
      </Text>
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}
        
        radius={120}
        mx="auto"
        
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {user.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {user.email}
      </Text>

      <Button fullWidth mt="md" className='btn-share' style={{backgroundColor: "white", color: "blue", border: "1px solid blue", margin: "20px 15px", maxWidth: "90%",
        minHeight: "50px"
      }}>
        
        Share profile link
      </Button>
    </Paper>
  );
}

export default User;