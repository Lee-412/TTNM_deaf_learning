'use client'
import classes from './homepage6.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Text, Collapse } from '@mantine/core';

const HomePage6 = () => {
    const [opened1, { toggle: toggle1 }] = useDisclosure(false); // Đối tượng 1
    const [opened2, { toggle: toggle2 }] = useDisclosure(false); // Đối tượng 2
    const [opened3, { toggle: toggle3 }] = useDisclosure(false); // Đối tượng 3
    const [opened4, { toggle: toggle4 }] = useDisclosure(false); // Đối tượng 1
    const [opened5, { toggle: toggle5 }] = useDisclosure(false); // Đối tượng 2
    const [opened6, { toggle: toggle6 }] = useDisclosure(false);
    return (
        <div className={classes['homepage6']}>
            <hr className={classes['homepage3-hr-1']} />
            <h1 className={classes['homepage6-h']}>Câu hỏi thường gặp</h1>
            <hr className={classes['homepage3-hr-2']} />
            <div className={classes['homepage6-b']}>
                <ul>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle1}>Làm thế nào để biết mình có thực hiện cử chỉ đúng hay không?</div>
                        <Collapse in={opened1}>
                            <Text ><p> Bạn có thể vào mục khoá học và vào phần kiểm tra kí hiệu bạn thực hiện kí hiệu và trang
                                web sẽ trả về kết quả ký hiệu mà nó nhận dạng được từ đó bạn có thể biết được mình làm
                                đúng hay không nè. </p></Text>
                        </Collapse>
                    </li>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle2}>Trí tuệ nhân tạo được ứng dụng vào việc nhận diện như thế nào?</div>
                        <Collapse in={opened2}>
                            <Text className={classes['homepage6-b-a']}><p> Trong trang web này sử dụng model LSTM được huyến luyện từ toạ độ điểm từ thư viện mediapipe
                                giúp nhận dạng được tạo độ các đốt tay, dáng người và khuôn mặt của bạn, từ đó đưa ra kết quả
                                nhận diện chính xác đó.
                            </p></Text>
                        </Collapse>
                    </li>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle3}>Tôi là người khiếm thính, tôi có thể học ngôn ngữ ký hiệu của nước khác để giao tiếp được không?</div>
                        <Collapse in={opened3}>
                            <Text className={classes['homepage6-b-a']}> <p> Có, người khiếm thính hoàn toàn có thể học ngôn ngữ ký hiệu của nước ngoài để giao tiếp. Ngôn
                                ngữ ký hiệu, còn được gọi là ngôn ngữ cử chỉ, là một hệ thống giao tiếp sử dụng các biểu hiện cử chỉ,
                                hình ảnh và các ký hiệu đặc biệt để truyền đạt ý nghĩa. Một số quốc gia có ngôn ngữ ký hiệu cụ thể cho
                                người khiếm thính, nhưng một số ngôn ngữ ký hiệu cũng có thể được sử dụng ở nhiều quốc gia.
                                Việc học ngôn ngữ ký hiệu của một nước ngoài có thể giúp người khiếm thính giao tiếp với người khiếm
                                thính khác từ khắp nơi trên thế giới. Điều này đặc biệt hữu ích khi họ du lịch hoặc giao tiếp qua
                                với người từ các quốc gia khác đó nha.
                            </p></Text>
                        </Collapse>
                    </li>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle4}>Tôi muốn đóng góp thêm tư liệu, tôi phải làm sao?</div>
                        <Collapse in={opened4}>
                            <Text className={classes['homepage6-b-a']}><p> Bạn chỉ cần tự quay video của mình làm ngôn ngữ kí hiệu nào bạn muốn và gửi về cho chúng mình.
                                Thông tin chi tiết bạn có thể xem ở trang đóng góp nhé
                            </p></Text>
                        </Collapse>
                    </li>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle5}>Cách tạo tài khoản học tập?</div>
                        <Collapse in={opened5}>
                            <Text className={classes['homepage6-b-a']}><p> Bạn vào mục đăng ký ở góc phải phía trên màn hình và nhập vào các trường được yêu cầu.
                                Các bạn nhớ lưu ý nhớ mật khẩu đó nha
                            </p></Text>
                        </Collapse>
                    </li>
                    <li>
                        <div className={classes['homepage6-b-q']} onClick={toggle6}>Tôi có một số vấn đề muốn được giải đáp trực tiếp, vậy thì tôi phải liên hệ với các bạn qua đâu</div>
                        <Collapse in={opened6}>
                            <Text className={classes['homepage6-b-a']}>djt con me m</Text>
                        </Collapse>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default HomePage6;