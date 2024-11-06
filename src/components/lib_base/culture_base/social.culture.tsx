import { Container } from "@mantine/core";
import styles from './social.module.css'
import { Divider, Text } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";
import { data_social_base } from "@/data/lib_base/data.social";

const SocialCultureBase = () => {


    const data_social_page = data_social_base;
    return (
        <Container size={"lg"}>

            {data_social_page.map((data: any, index: any) => (
                <div key={index} className={styles.container} >
                    <div className={styles.title}>
                        {data.topic}
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

export default SocialCultureBase;