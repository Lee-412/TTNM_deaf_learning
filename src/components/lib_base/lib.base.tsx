'use client'
import { Button, Container, Text, Divider } from "@mantine/core";
import styles from './lib.base.module.css';
import { useRouter } from "next/navigation";
import { data_lib_base } from "@/data/lib_base/data.libbase";


const LibraryBase = (props: any) => {

    const data_lib_page = props.data;
    const router = useRouter()

    const handleClickButton = (target: string) => {
        router.push(`/lib_base/${target}`);
    }


    return (
        <>
            <Container className={styles.container_root}>
                <div>
                    <Divider my="md" />

                    <Text className={styles.title}>Thư Viện</Text>
                    <Divider my="md" color="blue" />
                </div>

                <>

                    {data_lib_page.map((data: any, index: any) => (
                        <div className={`${styles.container_content} ${index % 2 !== 0 ? styles.reverse : ''}`} key={index}>
                            <div className={styles.image_wrapper}>
                                <img src={data.imgUrl} alt="Image description" className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                                <Button onClick={() => { handleClickButton(data.target) }}>Tìm hiểu thêm</Button>
                            </div>
                        </div>
                    ))}

                </>

            </Container>

        </>
    );
};

export default LibraryBase;