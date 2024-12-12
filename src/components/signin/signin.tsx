"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./sigin.module.css";
import { useContext, useEffect, useState } from "react";
import ForgotPassword from "../password/forgot.password";
import { useRouter } from "next/navigation";
import { ContextData, UserContext } from "../useContext/userContext";

interface dataSignIn {
  email: string;
  password: string;
}

const SigninBox = () => {
  const { user } = useContext(UserContext);
  const { loginContext } = useContext(UserContext);

  const router = useRouter();
  useEffect(() => {
    if (user && user.isAuthenticate === true) {


      router.push("/");
    }
  }, [user, router]);

  const [opened, setOpen] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<dataSignIn>({
    email: "",
    password: "",
  });

  const handleClickSignIn = async (e: any) => {
    e.preventDefault();

    if (formData.email != "" && formData.password != "") {
      setError("");
      let data_signin = {
        name: "username",
        email: formData.email,
        password: formData.password,
        point: 0,
      };
      let response = await fetch("http://localhost:5002/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data_signin),
      });
      if (response.status === 200) {
        const dataServer = await response.json();
        let data: ContextData = {
          token: "token",
          isAuthenticate: true,
          account: {
            email: dataServer.email,
            username: dataServer.name,
            id: dataServer.id,
            point: dataServer.point,
          },
        };
        loginContext(data);

        sessionStorage.setItem("user", JSON.stringify(dataServer));
        router.push("/");
      } else {
        setError("Tài khoản hoặc mật khẩu không đúng");
      }
    } else {
      setError("Vui lòng nhập đầy đủ thông tin");
    }
  };

  const handleCreateAccount = () => {
    router.push("/Signup");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container
      size={420}
      my={40}
      style={{ height: "81vh", paddingTop: "10vh" }}
    >
      <Title ta="center" className={classes.title}>
        Mừng bạn trở lại !
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Bạn chưa có tài khoản?{" "}
        <Anchor
          size="sm"
          component="button"
          onClick={() => {
            handleCreateAccount();
          }}
        >
          Tạo tài khoản
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <PasswordInput
          label="Mật khẩu"
          name="password"
          placeholder="Mật khẩu"
          required
          mt="md"
          value={formData.password}
          onChange={handleChange}
        />
        {error && (
          <Text color="red" size="sm" mt="xs">
            {error}
          </Text>
        )}{" "}
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor
            component="button"
            size="sm"
            onClick={() => {
              setOpen(true);
            }}
          >
            Quên mật khẩu?
          </Anchor>
        </Group>
        <Button
          fullWidth
          mt="xl"
          onClick={(e) => {
            handleClickSignIn(e);
          }}
        >
          Đăng nhập
        </Button>
      </Paper>

      <ForgotPassword
        opened={opened}
        setOpen={setOpen}
        email={formData.email}
      />
    </Container>
  );
};
export default SigninBox;
