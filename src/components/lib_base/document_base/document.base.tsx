'use client'
import { Container } from "@mantine/core";
import styles from './document.module.css';
import { Divider, Text } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";
import { useEffect, useRef } from "react";

const DocumentBase = () => {



    const data_document_base = [
        {
            title: 'Tài liệu',
            content: [
                {
                    title: 'Hướng dẫn học thủ ngữ khi tiếp xúc với người khiếm thính',
                    url: 'http://me.phununet.com/WikiPhununet/ChiTietWiKi.aspx?m=0&StoreID=26631',
                    imgUrl: 'https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/deaf-hard-hearing-education-tc-columbia.jpg?itok=TLCDamF2',
                    content: '',
                },
                {
                    title: 'Một số phương thức hình thành kí hiệu của người điếc Việt Nam',
                    url: 'http://vjes.vnies.edu.vn/sites/default/files/baivietso6_0.pdf',
                    imgUrl: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2024/04/giao-tiep-phi-ngon-ngu-hieu-qua.jpg',
                    content: '',
                },
                {
                    title: 'Cách học ngôn ngữ ký hiệu',
                    url: 'https://www.recursosdeautoayuda.com/vi/c%C3%A1ch-h%E1%BB%8Dc-ng%C3%B4n-ng%E1%BB%AF-k%C3%BD-hi%E1%BB%87u/',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: '',
                }

            ],
        },
        {
            title: 'Bài hát',
            content: [
                {
                    title: 'Nơi ấy con tìm về',
                    url: 'https://youtu.be/59oywtLlcRU',
                    imgUrl: 'https://tse1.mm.bing.net/th?&id=OVP.qtReKq1DLVUJduU488pCWwEsDh&w=528&h=298&c=7&pid=1.7&rs=1',
                    content: '',
                },
                {
                    title: 'Sống như những đóa hoa',
                    url: 'https://youtu.be/DYmQwqdGIWI',
                    imgUrl: 'https://tse1.mm.bing.net/th?&id=OVP.HCPKhZaDvVhe_v9cCLOR1gEsDh&w=528&h=298&c=7&pid=1.7&rs=1',
                    content: '',
                },
                {
                    title: 'Happy Birthday',
                    url: 'https://youtu.be/de0oH9uaTvI',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: '',
                },
                {
                    title: 'My heart will go on',
                    url: 'https://youtu.be/-6Xzz8jOpBI',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: '',
                },
                {
                    title: 'Hai mươi hai',
                    url: 'https://youtu.be/8fXtGS98ihM',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: '',
                },
                {
                    title: 'Ước mơ của mẹ',
                    url: 'https://www.youtube.com/watch?v=CUztUo7AQZY',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: '',
                }
            ],
        },
        {
            title: 'Truyện, thơ',
            content: [
                {
                    title: 'Tháng Gióng',
                    url: 'https://youtu.be/3b4w3TUCvSY',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Truyện',
                },
                {
                    title: 'Câu chuyện bó đũa',
                    url: 'https://youtu.be/Fu7RVQonBn8',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Truyện',
                },
                {
                    title: 'Cô bé bán diêm',
                    url: 'https://youtu.be/I2tDpZS6pDY',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Truyện',
                },
                {
                    title: 'Tích Chu',
                    url: 'https://youtu.be/rYMAOwfBIU8',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Truyện',
                },
                {
                    title: 'Nhổ củ cải',
                    url: 'https://youtu.be/fI3loPmZMLY',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Truyện',
                },
                {
                    title: 'Làm anh',
                    url: 'https://youtu.be/JCK29NbNtUg',
                    imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
                    content: 'Thơ',
                }
            ],
        }
    ];



    return (
        <Container size={"lg"}>

            {data_document_base.map((data: any, index: any) => (
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