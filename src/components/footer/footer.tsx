'use client'
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import { useRouter } from 'next/navigation';

const data = [
    {
        title: 'About',
        links: [
            { label: 'Thư viện', link: '/libpage' },
            { label: 'FAQ', link: '/FAQ' },
            { label: 'Đóng góp', link: '/contribution' },

        ],
    },
    {
        title: 'Community',
        links: [
            { label: 'Join Discord', link: '#' },
            { label: 'Follow on Twitter', link: '#' },
            { label: 'Email newsletter', link: '#' },
            { label: 'Facebooks', link: 'https://www.facebook.com/profile.php?id=100012684707050' },
        ],
    },
];

const Footer = () => {
    const route = useRouter();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });
    const handleClickSocial = (target: string) => {
        if (target === 'Github') {
            route.push('https://github.com/LeHien2818')
        }
        else if (target === 'Youtube') {
            route.push('https://nextjs.org/docs/14/getting-started/installation')
        }
        else {
            route.push('https://nextjs.org/docs/14/getting-started/installation')
        }

    }

    return (
        <footer className={classes.footer} style={{marginTop: '0px !important'}}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <MantineLogo size={30} />
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Ứng dụng học ký hiệu thủ ngữ cho người bị khiếm thính
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2024 deaf_learning.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => {
                        handleClickSocial('Github');
                    }}
                    >
                        <IconBrandGithub style={{ width: rem(18), }} stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle"
                        onClick={() => {
                            handleClickSocial('Youtube');
                        }}
                    >
                        <IconBrandYoutube style={{ width: rem(18), }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle"
                        onClick={() => {
                            handleClickSocial('Instagram');
                        }}
                    >
                        <IconBrandInstagram style={{ width: rem(18), }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
export default Footer;