"use client";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Anchor,
} from "@mantine/core";
import classes from "../signin/sigin.module.css";
import { useContext, useEffect, useState } from "react";
import ForgotPassword from "../password/forgot.password";
import { useRouter } from "next/navigation";
import { ContextData, UserContext } from "../useContext/userContext";

interface dataSignup {
  email: string;
  username: string;
  password: string;
}

const SignupBox = () => {
  const { user } = useContext(UserContext);
  const { loginContext } = useContext(UserContext);

  const router = useRouter();
  useEffect(() => {
    if (user && user.isAuthenticate === true) {
      console.log("hit login true");
      router.push("/");
    }
  }, [user, router]);

  const [opened, setOpen] = useState(false);

  const [formData, setFormData] = useState<dataSignup>({
    email: "",
    username: "",
    password: "",
  });

  const [rePassword, setRePassword] = useState<string>(""); // State cho re-password
  const [errorPassword, setErrorPassword] = useState<string>(""); // State cho thông báo lỗi
  const [errorEmail, setErrorEmail] = useState<string>(""); // State cho thông báo lỗi
  const [errorUsername, setErrorUsername] = useState<string>(""); // State cho thông báo lỗi

  const validateInput = () => {
    setErrorEmail(""); // Xóa lỗi nếu không có lỗi
    // Kiểm tra email
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!formData.email) {
        setErrorEmail("Không được để trống");
    } else if (!emailRegex.test(formData.email)) {
        setErrorEmail("Không đúng định dạng");
    }

    
    return errorEmail; // Trả về true nếu không có lỗi
};

  const handleClickSignUp = async (e: any) => {
    e.preventDefault();
    if (
      formData.email != "" &&
      formData.username != "" &&
      formData.password != "" &&
      rePassword != ""
    ) {

        validateInput();
        
      // Kiểm tra mật khẩu
      if (formData.password !== rePassword) {
        setErrorPassword("Mật khẩu không trùng!");
        return;
      }
      setErrorPassword(""); // Xóa lỗi nếu mật khẩu trùng

      

      let data_signin = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        point: 0,
      };

      let response = await fetch("http://localhost:5002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data_signin),
      });

      console.log(response);
      const dataServer = await response.json();
      console.log("data Server signup", dataServer);

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
      sessionStorage.setItem("user", JSON.stringify(data));
      router.push("/");
    } else setErrorPassword("Vui lòng điền đầy đủ thông tin!");
  };

  const handleSigin = () => {
    router.push("/Signin");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Chào mừng bạn !
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Tạo tài khoản ngay bây giờ !
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
        {errorEmail && (
          <Text color="red" size="sm" mt="xs">
            {errorEmail}
          </Text>
        )}{" "}
        <TextInput
          label="Username"
          placeholder="username"
          mt="md"
          required
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
        {errorUsername && (
          <Text color="red" size="sm" mt="xs">
            {errorUsername}
          </Text>
        )}{" "}

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Your password"
          required
          mt="md"
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordInput
          label="Re-Password"
          name="re-password"
          placeholder="Confirm your password"
          required
          mt="md"
          value={rePassword}
          onChange={handleRePasswordChange}
        />
        {errorPassword && (
          <Text color="red" size="sm" mt="xs">
            {errorPassword}
          </Text>
        )}{" "}
        {/* Hiển thị lỗi */}

        <Button fullWidth mt="xl" onClick={handleClickSignUp}>
          Đăng ký 
        </Button>
        <Text
          c="dimmed"
          size="sm"
          ta="center"
          mt={5}
          style={{ paddingTop: "10px" }}
        >
          Bạn đã có tài khoản?{" "}
          <Anchor
            size="sm"
            component="button"
            onClick={() => {
              handleSigin();
            }}
          >
            Đăng nhập
          </Anchor>
        </Text>
      </Paper>

      <ForgotPassword
        opened={opened}
        setOpen={setOpen}
        email={formData.email}
      />
    </Container>
  );
};

export default SignupBox;
