import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
    Modal,
    em,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from './forgot.module.css';
import { useEffect, useState } from 'react';

interface PropForgot {
    opened: boolean;
    setOpen: (e: boolean) => void;
    email: string
}

const ForgotPassword = (props: PropForgot) => {
    const { opened, setOpen, email } = props;
    const [emailForgot, setEmailForgot] = useState(email);

    useEffect(() => {
        setEmailForgot(email)
    }, [email])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailForgot(e.target.value)
    }

    const handleClickResetPassword = () => {
        console.log(emailForgot);

    }
    const handleCloseModal = () => {
        setEmailForgot('')
        setOpen(false);
    }

    return (
        <Modal
            opened={opened} onClose={handleCloseModal}
            title="Forgot password"
            centered
        >
            <Container size={460}>
                <Text c="dimmed" fz="sm" ta="center">
                    Nhập tài khoản email của bạn
                </Text>

                <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                    <TextInput label="Your email" placeholder="me@mantine.dev" required value={emailForgot}
                        name='emailForgot'
                        onChange={handleChange}
                    />
                    <Group justify="space-between" mt="lg" className={classes.controls}>
                        <Anchor c="dimmed" size="sm" className={classes.control}>
                            <Center inline>
                                <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                                <Box ml={5} onClick={() => {
                                    handleCloseModal()

                                }}>Back to the login page</Box>
                            </Center>
                        </Anchor>
                        <Button className={classes.control} onClick={handleClickResetPassword}>Reset password</Button>
                    </Group>
                </Paper>
            </Container>
        </Modal >

    );
}
export default ForgotPassword;