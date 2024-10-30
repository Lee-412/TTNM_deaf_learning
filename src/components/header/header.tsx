'use client'
import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useRouter } from 'next/navigation';


export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const route = useRouter();
    const handleClickLogin = () => {
        route.push('/Signin')
    }
    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <MantineLogo size={30} />

                    <Group h="100%" gap={0} visibleFrom="sm">

                        <a href="/" className={classes.link}>
                            Trang chủ
                        </a>
                        <a href="/course_base/courses" className={classes.link}>
                            Khoá học
                        </a>
                        <a href="/library" className={classes.link}>
                            Thư viện
                        </a>
                        <a href="/FAQ" className={classes.link}>
                            FAQ
                        </a>
                        <a href="/contribution" className={classes.link}>
                            Đóng góp
                        </a>
                        <a href="/about" className={classes.link}>
                            Về chúng tôi
                        </a>


                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="default" onClick={() => {
                            handleClickLogin()
                        }}>Log in</Button>
                        <Button>Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Trang chủ
                    </a>
                    <a href="#" className={classes.link}>
                        Khoá học
                    </a>
                    <a href="#" className={classes.link}>
                        Thư viện
                    </a>
                    <a href="#" className={classes.link}>
                        FAQ
                    </a>
                    <a href="#" className={classes.link}>
                        Đóng góp
                    </a>
                    <a href="#" className={classes.link}>
                        Về chúng tôi
                    </a>


                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default" onClick={() => {
                            handleClickLogin()
                        }}>Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}