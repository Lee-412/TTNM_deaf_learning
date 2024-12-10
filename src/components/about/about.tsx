"use client";
import {
  IconDots,
  IconMessages,
  IconNote,
  IconPencil,
  IconReportAnalytics,
  IconTrash,
} from "@tabler/icons-react";
import styles from './about.module.css';
import {
  Container,
  ActionIcon,
  Avatar,
  Group,
  Menu,
  Table,
  Text,
  Divider,
} from "@mantine/core";

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Lê Thế Hiển",
    job: "Team Leader",
    email: "hiendepzai@gmail.com",
    age: 20,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "Lê Văn Đức",
    job: "Member",
    email: "ducdepzai@gmail.com",
    age: 20,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Nguyễn Quang Khải",
    job: "Member",
    email: "khaidepzai@gmail.com",
    age: 20,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Phạm Quý Sơn",
    job: "Member",
    email: "sondepzai@gmail.com",
    age: 20,
  },
];

const AboutBase = () => {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={60} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text c="dimmed" fz="xs">
              {item.job}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.email}</Text>
        <Text fz="xs" c="dimmed">
          Email
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.age}</Text>
        <Text fz="xs" c="dimmed">
          age
        </Text>
      </Table.Td>
     
    </Table.Tr>
  ));

  return (
    <Container>
        <Divider my="md" />
      <div className={styles.container_root}>
        

        <Text className={styles.title}>
          Về chúng tôi
        </Text>
        
      </div>
      <Divider my="md" color="blue" />
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
};

export default AboutBase;
