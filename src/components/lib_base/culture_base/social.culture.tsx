import { Container } from "@mantine/core";
import styles from './social.module.css'
import Card_Base from "@/components/lib_base/document_card/document.card";

const SocialCultureBase = (props: any) => {

    const data_social_page = props.data;
    return (
        <Container size={"lg"}>

            {data_social_page.map((data: any, index: any) => (
                <div key={index} className={styles.container} >
                    <div className={styles.title}>
                        {data.title}
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