'use client'
import { Avatar, Button, Paper, Text } from '@mantine/core';
import classes from './User.module.css';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '@/components/useContext/userContext';



const User = (props: any) => {


  let data = props;
  // console.log("data props", data);

  // console.log("data account", data.data.account);

  // console.log(data.data.account.username);


  // console.log(user.account);

  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" className={classes.paper} >
      <Text ta="center" fz="lg" fw={500} mt="md" style={{ paddingBottom: "20px" }}>
        Personal Detail
      </Text>
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}

        radius={120}
        mx="auto"

      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {data.data.account.username}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {data.data.account.email}
      </Text>

      <Button fullWidth mt="md" className='btn-share' style={{
        backgroundColor: "white", color: "blue", border: "1px solid blue", margin: "20px 15px", maxWidth: "90%",
        minHeight: "50px"
      }}>

        Share profile link
      </Button>
    </Paper>
  );
}

export default User;