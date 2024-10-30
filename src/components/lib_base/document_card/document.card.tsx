'use client'

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import styles from './card.module.css'; // Import CSS module
import { useRouter } from 'next/navigation';

interface Data_card {
    title: string,
    url: string,
    imgUrl: string,
    content: string

}
const Card_Base = (props: Data_card) => {

    const router = useRouter();
    const handleClickContent = () => {
        // router.push(props.url)
        window.open(props.url)
    }

    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.cardItem}>
                <Card.Section>
                    <Image
                        src={props.imgUrl}
                        height={180}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}
                        className={styles.title}
                        onClick={() => {
                            handleClickContent()
                        }} >{props.title}</Text>
                    {/* <Badge color="pink">On Sale</Badge> */}
                </Group>

                <Text size="sm" c="dimmed" className={styles.contents}>
                    {props.content}
                </Text>

                {/* <Button color="blue" fullWidth mt="md" radius="md" onClick={() => {
                    handleClickContent()
                }}>
                    Read more
                </Button> */}
            </Card>
        </>
    )
}
export default Card_Base;
