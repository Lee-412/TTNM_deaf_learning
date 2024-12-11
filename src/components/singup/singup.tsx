'use client'
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import classes from '../signin/sigin.module.css';
import { useContext, useEffect, useState } from 'react';
import ForgotPassword from '../password/forgot.password';
import { useRouter } from 'next/navigation';
import { ContextData, UserContext } from '../useContext/userContext';

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
            console.log('hit login true');
            router.push('/');
        }
    }, [user, router]);

    const [opened, setOpen] = useState(false);

    const [formData, setFormData] = useState<dataSignup>({
        email: '',
        username: '',
        password: '',
    });

    const [rePassword, setRePassword] = useState<string>(''); // State cho re-password
    const [error, setError] = useState<string>(''); // State cho thông báo lỗi

    const handleClickSignUp = async (e: any) => {
        e.preventDefault();

        // Kiểm tra mật khẩu
        if (formData.password !== rePassword) {
            setError('Mật khẩu không trùng!');
            return;
        }
        setError(''); // Xóa lỗi nếu mật khẩu trùng



        let data_signin = {
            name: formData.username,
            email: formData.email,
            password: formData.password,
            point: 0,
        };

        let response = await fetch('http://localhost:5002/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data_signin),
        });

        console.log(response);
        const dataServer = await response.json()
        console.log("data Server signup", dataServer);

        let data: ContextData = {
            token: 'token',
            isAuthenticate: true,
            account: {
                email: dataServer.email,
                username: dataServer.name,
                id: dataServer.id,
                point: dataServer.point
            },
        };
        loginContext(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        router.push('/');
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
                Welcome!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Create your account now!
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
                <TextInput
                    label="Username"
                    placeholder="username"
                    mt="md"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    name="username"
                />
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
                {error && <Text color="red" size="sm" mt="xs">{error}</Text>} {/* Hiển thị lỗi */}

                <Button fullWidth mt="xl" onClick={handleClickSignUp}>
                    Sign up
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

export default SignupBox;
