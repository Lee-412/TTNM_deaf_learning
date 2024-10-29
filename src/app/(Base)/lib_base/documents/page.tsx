import { Container } from "@mantine/core";
import styles from './document.module.css';
import { Divider } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";

const documentBase = () => {



    return (
        <Container>

            <div className={styles.container}>
                <div className={styles.title}>
                    <Divider my="md" className={styles.divider} />
                    Tài liệu
                    <Divider size="lg"
                        color="blue" />


                </div>
                <div className={styles.cardContainer}>
                    <Card_Base
                        title={'Hướng dẫn học thủ ngữ khi tiếp xúc với người khiếm thính'}
                        url={'http://me.phununet.com/WikiPhununet/ChiTietWiKi.aspx?m=0&StoreID=26631'}
                        imgUrl={'https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/deaf-hard-hearing-education-tc-columbia.jpg?itok=TLCDamF2'}
                        content={''}
                    />
                    <Card_Base
                        title={'Hướng dẫn học thủ ngữ khi tiếp xúc với người khiếm thính'}
                        url={'http://me.phununet.com/WikiPhununet/ChiTietWiKi.aspx?m=0&StoreID=26631'}
                        imgUrl={'https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/deaf-hard-hearing-education-tc-columbia.jpg?itok=TLCDamF2'}
                        content={''}
                    />
                    <Card_Base
                        title={'Hướng dẫn học thủ ngữ khi tiếp xúc với người khiếm thính'}
                        url={'http://me.phununet.com/WikiPhununet/ChiTietWiKi.aspx?m=0&StoreID=26631'}
                        imgUrl={'https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/deaf-hard-hearing-education-tc-columbia.jpg?itok=TLCDamF2'}
                        content={''}
                    />
                </div>

            </div>
        </Container>
    );
};

export default documentBase;