'use client'
import styles from './comunity.module.css'
import { Button, Container, Divider, Text } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";
import { data_comunity_base } from '@/data/lib_base/data.comunity';



const ComunityBase = (props: any) => {

    const data_comunity_page = props.data;

    function handleClickContent(target: string) {
        window.open(target)
    }

    return (
        <Container size="lg" >

            <div className={styles.title}>
                <Divider my="md" />
                <Text className={styles.title}>Cộng đồng trực tuyến </Text>
                <Divider my="md" color="blue" />
            </div>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    {data_comunity_page.map((data: any, index: any) => (
                        <div key={index} className={styles.cardItem}>
                            <div>
                                <Card_Base
                                    key={index}
                                    title={data.title}
                                    url={''}
                                    imgUrl={data.imgUrl}
                                    content={data.content}
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                {data.contact.map((social: any, contactId: any) => (
                                    <Button
                                        key={contactId}
                                        variant={contactId % 2 === 1 ? 'filled' : 'outline'}
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                        onClick={() => handleClickContent(social.url)}
                                    >
                                        {social.channel}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
export default ComunityBase;