'use client'
import { Container } from "@mantine/core";
import styles from './document.module.css';
import { Divider, Text } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";

const DocumentBase = (props: any) => {

    const data_document_page = props.data;

    return (
        <Container size={"lg"}>

            {data_document_page.map((data: any, index: any) => (
                <div key={index} className={styles.container}>
                    <div className={styles.title}>
                        <Divider my="md" className={styles.divider} />
                        {data.title}
                        <Divider size="lg" color="blue" />
                    </div>
                    <div className={styles.cardContainer}>
                        {data.content.map((dt: { title: string; url: string; imgUrl: string; content: string; }, dtIndex: any) => (

                            <Card_Base
                                key={dtIndex}
                                title={dt.title}
                                url={dt.url}
                                imgUrl={dt.imgUrl}
                                content={dt.content}
                            />

                        ))}
                    </div>
                </div>
            ))}


        </Container >
    );
};

export default DocumentBase;