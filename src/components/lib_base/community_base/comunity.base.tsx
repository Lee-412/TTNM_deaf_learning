'use client'
// import styles from '../document_base/document.module.css';
import styles from './comunity.module.css'
import { Button, Container, Divider, Text } from '@mantine/core';
import Card_Base from "@/components/lib_base/document_card/document.card";



const ComunityBase = () => {
    const data_comunity_base = [
        {
            title: 'PARD Vietnam',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Trung tâm vì người điếc (PARD) hướng đến một xã hội hòa nhập, nơi mà người điếc có sự tiếp cận đầy đủ với ngôn ngữ ký hiệu và sự bình đẳng khi tham gia các hoạt động xã hội.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/pardvietnam'
                },
                {
                    channel: 'Website',
                    url: 'https://pardvietnam.com/'
                }
            ]
        },
        {
            title: 'Chi Hội Người Điếc Hà Nội - HAD',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Chi hội người điếc Hà Nội - HAD là tổ chức xã hội của người Điếc trên địa bàn thành phố Hà Nội.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/hadeaf2000'
                },
                {
                    channel: 'Website',
                    url: 'http://deafhanoi.com/index.html'
                }
            ]
        },
        {
            title: 'Trung tâm Khiếm thính (CED)',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Trung tâm Nghiên cứu Giáo dục Người Khiếm thính (CED) - Chiếc cầu nối gắn kết người nghe bình thường',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/CED.Thegioikhiemthinh/'
                },
                {
                    channel: 'Website',
                    url: 'https://ced.org.vn/'
                }
            ]
        },
        {
            title: 'Thể thao người điếc Việt Nam',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Trang chia sẻ hoạt động của phong trào thể thao người điếc Việt Nam.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/VNDeafSport'
                }
            ]
        },
        {
            title: 'Nghe bằng Mắt',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Mang người Điếc và người nghe tới gần nhau hơn thông qua con đường nghệ thuật.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/NghebangMat'
                }
            ]
        },
        {
            title: 'The Fingerese',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'The Fingerese là một dự án phi lợi nhuận được thành lập bởi một nhóm học sinh cấp ba trên địa bàn thành phố Hà Nội, được ấp ủ và thành lập sau khi các bạn đã có những trải nghiệm thực tế, tự mình chứng kiến và thấu hiểu sự khó khăn trong quá trình hòa nhập của Cộng đồng người Điếc với xã hội hiện nay.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/thefingerese'
                }
            ]
        },
        {
            title: 'Hội những người yêu thích ngôn ngữ ký hiệu',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: 'Nhóm được thành lập nhằm tạo sân chơi giao lưu lành mạnh, học hỏi thêm kĩ năng, ngôn ngữ, tìm kiếm cơ hội việc làm cho anh chị em Khiếm Thính, những ai yêu thích đang sử dụng ngôn ngữ ký hiệu và những ai có đam mê và mong muốn được học ngôn ngữ này để giao tiếp.',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/groups/223775082706706'
                }
            ]
        },
        {
            title: 'Hội người khiếm thính',
            imgUrl: 'https://vuanem.com/blog/wp-content/uploads/2023/06/phan-mem-hoc-ngon-ngu-ky-hieu-tay.jpg',
            content: '',
            contact: [
                {
                    channel: 'Facebook',
                    url: 'https://www.facebook.com/groups/733560506839053'
                }
            ]
        }
    ];
    function handleClickContent(target: string) {
        console.log(target);
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
                    {data_comunity_base.map((data: any, index: any) => (
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