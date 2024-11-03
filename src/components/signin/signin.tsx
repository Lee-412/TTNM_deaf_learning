'use client'
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
    Center,
    Box,
    rem,
} from '@mantine/core';
import classes from './sigin.module.css';
import { useState } from 'react';
import ForgotPassword from '../password/forgot.password';
import { useRouter } from 'next/navigation';

interface dataSignIn {
    email: string;
    password: string;
}

const SigninBox = () => {
    const [opened, setOpen] = useState(false);
    const [formData, setFormData] = useState<dataSignIn>({
        email: '',
        password: ''
    });

    const router = useRouter()
    const handleClickSignIn = (e: any) => {
        e.preventDefault();
        console.log(formData);
        const data = JSON.stringify(formData)
        sessionStorage.setItem('userData', data);

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor size="sm" component="button">
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Email"
                    placeholder="you@mantine.dev"
                    required value={formData.email}
                    onChange={handleChange}
                    name='email'
                />
                <PasswordInput
                    label="Password"
                    name='password'
                    placeholder="Your password"
                    required mt="md"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm" onClick={() => {
                        setOpen(true);
                    }}>
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" onClick={(e) => { handleClickSignIn(e) }}>
                    Sign in
                </Button>
            </Paper>

            <ForgotPassword
                opened={opened}
                setOpen={setOpen}
                email={formData.email}
            />


        </Container>

    );
}
export default SigninBox;