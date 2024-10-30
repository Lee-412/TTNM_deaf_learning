'use client'
import { Button, Container, Text, Divider } from "@mantine/core";
import styles from './lib.base.module.css';
import { useRouter } from "next/navigation";


const LibraryBase = () => {

    const data_lib_page = [
        {
            title: 'Tài liệu',
            imgUrl: 'https://i.pinimg.com/1200x/d5/18/47/d5184769459b4521b88b555b523b5208.jpg',
            content: 'Tài liệu hướng dẫn cách học và sử dụng ngôn ngữ ký kiệu, video,...',
            target: 'documents'
        },
        {
            title: 'Văn hóa - Xã hội',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAquYEdVkqjY8hbI0lcZbiF6bh3Kw36VSuA&s',
            content: 'Khám phá văn hóa, xã hội và hoạt động của cộng đồng người khiếm thính. Các nhân vật truyền cảm hứng và tổ chức truyền lửa.',
            target: 'social-culture'
        },
        {
            title: 'Cộng đồng trực tuyến',
            imgUrl: 'https://th.bing.com/th/id/OIP.KheH7TyVVOlgb0S1HLZFdwHaHa?rs=1&pid=ImgDetMain',
            content: 'Danh sách các cộng đồng trực tuyến về ngôn ngữ ký hiệu',
            target: 'comunities'
        }
    ]
    const router = useRouter()

    const handleClickButton = (target: string) => {
        console.log(target);
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

                    {data_lib_page.map((data, index) => (
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