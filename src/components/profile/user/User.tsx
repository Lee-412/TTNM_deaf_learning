"use client";
import { Avatar, Button, Paper, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import classes from './User.module.css';
import avatar from '../../about/img/Hien.jpg';

const User = (props: any) => {
  let data = props;

  const handleClickShare = () => {
    // Lấy URL hiện tại của trang
    const profileUrl = window.location.href;

    // Sao chép URL vào clipboard
    navigator.clipboard.writeText(profileUrl)
      .then(() => {
        // Hiển thị thông báo thành công
        showNotification({
          title: 'Thành công',
          message: 'Đã copy vào bộ nhớ!', // Nội dung thông báo
          color: 'green', // Màu sắc thông báo
          icon: <IconCheck size={16} />, // Icon thành công
          autoClose: 3000, // Đóng thông báo sau 3 giây
        });
      })
      .catch(() => {
        // Hiển thị thông báo lỗi
        showNotification({
          title: 'Thất bại',
          message: 'Không thể copy link, vui lòng thử lại.',
          color: 'red',
          icon: <IconX size={16} />, // Icon lỗi
          autoClose: 3000,
        });
      });
  };

  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" className={classes.paper}>
      <Text ta="center" fz="lg" fw={500} mt="md" style={{ paddingBottom: '20px' }}>
        Personal Detail
      </Text>
      <Avatar
        src={avatar.src}
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

      <Button
        fullWidth
        mt="md"
        className="btn-share"
        style={{
          backgroundColor: 'white',
          color: 'blue',
          border: '1px solid blue',
          margin: '20px 15px',
          maxWidth: '90%',
          minHeight: '50px',
        }}
        onClick={handleClickShare}
      >
        Share profile link
      </Button>
    </Paper>
  );
};

export default User;