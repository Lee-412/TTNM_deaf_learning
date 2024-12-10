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
    Avatar,
    Menu,
    Text
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { UserContext } from '../useContext/userContext';
import { useContext, useEffect, useState } from 'react';
import { IconLogout, IconMilitaryRank, IconSettings, IconUser } from '@tabler/icons-react';
const navItems = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Khoá học', path: '/course_base/courses' },
    { label: 'Thư viện', path: '/library' },
    { label: 'FAQ', path: '/FAQ' },
    { label: 'Đóng góp', path: '/contribution' },
    { label: 'Về chúng tôi', path: '/about' },
];
export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const router = useRouter();
    const handleClickLogin = () => {
        router.push('/Signin')
    }

    const { user, logoutContext } = useContext(UserContext);
    const pathname = usePathname();
    const [userData, setUserData] = useState({
        token: '',
        username: '',
        email: '',
        isAuthenticate: false
    })

    useEffect(() => {

        if (user && user.isAuthenticate === false) {
            // route.push('/login');
            console.log("no data");
        }
        else {
            console.log("check user header no content");
            setUserData({
                token: user.token,
                username: user.account.username,
                email: user.account.email,
                isAuthenticate: user.isAuthenticate
            });
        }
    }, [user]);

    const handleClickButtonHeader = (path: string) => {
        router.push(path)
    }
    const handleClickLogout = () => {
        logoutContext()
    }
    const handleClickSignup = () => {
        router.push('/Signup')
    }

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%" gap={0} style={{ paddingLeft: "40px" }}
                >
                    {/* <MantineLogo size={30} /> */}
                    <Group
                        justify="center"
                        h="100%"

                        gap={0}
                        style={{
                            flexWrap: 'nowrap',
                            alignItems: 'center'
                        }}
                        visibleFrom="sm"
                    >
                        <Avatar src='/logo-removebg-preview.png' size={'xl'} />
                        <Text style={{
                            fontWeight: 'bolder'
                        }}>Signlearn</Text>
                    </Group>
                    <Group h="100%" gap={0} visibleFrom="sm">

                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                variant="white"
                                color='black'
                                onClick={() => router.push(item.path)}
                                className={classes.buttonHeader}
                            >
                                {item.label}
                            </Button>
                        ))}

                    </Group>

                    <Group visibleFrom="sm">


                        {
                            userData && userData.isAuthenticate === true ?
                                <>
                                    <Menu shadow="md" width={200}>
                                        <Menu.Target>
                                            <Avatar src={null} alt="no image here" />
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item leftSection={<IconUser size={14} />}>Hồ Sơ</Menu.Item>
                                            <Menu.Item leftSection={<IconSettings size={14} />}>Bảng xếp hạng</Menu.Item>
                                            <Menu.Item leftSection={<IconSettings size={14} />}>Thống kê</Menu.Item>
                                            <Menu.Item leftSection={<IconSettings size={14} />}>Cài đặt</Menu.Item>

                                            <Menu.Divider />
                                            <Menu.Item
                                                color="red"
                                                leftSection={<IconLogout size={14} />}
                                                onClick={() => { handleClickLogout() }}
                                            >
                                                Đăng xuất
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                </>
                                :
                                <>

                                    <Button variant="default" onClick={() => {
                                        handleClickLogin()
                                    }}>Log in</Button>
                                    <Button onClick={() => {
                                        handleClickSignup()
                                    }}>Sign up</Button>
                                </>
                        }
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

                    {navItems.map((item) => (
                        <Button
                            key={item.path}
                            variant="white"
                            color='black'
                            onClick={() => handleClickButtonHeader(item.path)}
                            className={classes.buttonHeader}
                        >
                            {item.label}
                        </Button>
                    ))}

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        {
                            userData && userData.isAuthenticate === true ?
                                <>

                                    <Menu shadow="md" width={200}>
                                        <Menu.Target>
                                            <Avatar src={null} alt="no image here" />
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item leftSection={<IconUser size={14} />}>Hồ Sơ</Menu.Item>
                                            <Menu.Item leftSection={<IconMilitaryRank size={14} />}>Bảng xếp hạng</Menu.Item>
                                            <Menu.Item leftSection={<IconSettings size={14} />}>Thống kê</Menu.Item>
                                            <Menu.Item leftSection={<IconSettings size={14} />}>Cài đặt</Menu.Item>
                                            <Menu.Divider />
                                            <Menu.Item
                                                color="red"
                                                leftSection={<IconLogout size={14} />}
                                                onClick={() => { handleClickLogout() }}
                                            >
                                                Đăng xuất
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>

                                </>
                                :
                                <>

                                    <Button variant="default" onClick={() => {
                                        handleClickLogin()
                                    }}>Log in</Button>
                                    <Button onClick={() => {
                                        handleClickSignup()
                                    }}>Sign up</Button>
                                </>
                        }
                    </Group>

                </ScrollArea>
            </Drawer>
        </Box >
    );
}