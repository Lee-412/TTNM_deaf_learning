

'use client'
import classes from './QnA.module.css';
import { useState } from 'react';
import { Text, Collapse } from '@mantine/core';

const QnA = () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const toggle = (index: any) => {
        setOpenedIndex(openedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Làm thế nào để biết mình có thực hiện cử chỉ đúng hay không?",
            answer: "Bạn có thể vào mục khoá học và vào phần kiểm tra kí hiệu bạn thực hiện kí hiệu và trang web sẽ trả về kết quả ký hiệu mà nó nhận dạng được từ đó bạn có thể biết được mình làm đúng hay không nè."
        },
        {
            question: "Trí tuệ nhân tạo được ứng dụng vào việc nhận diện như thế nào?",
            answer: "Trong trang web này sử dụng model LSTM được huyến luyện từ toạ độ điểm từ thư viện mediapipe giúp nhận dạng được tạo độ các đốt tay, dáng người và khuôn mặt của bạn, từ đó đưa ra kết quả nhận diện chính xác đó."
        },
        {
            question: "Tôi là người khiếm thính, tôi có thể học ngôn ngữ ký hiệu của nước khác để giao tiếp được không?",
            answer: "Có, người khiếm thính hoàn toàn có thể học ngôn ngữ ký hiệu của nước ngoài để giao tiếp. Ngôn ngữ ký hiệu, còn được gọi là ngôn ngữ cử chỉ, là một hệ thống giao tiếp sử dụng các biểu hiện cử chỉ, hình ảnh và các ký hiệu đặc biệt để truyền đạt ý nghĩa. Việc học ngôn ngữ ký hiệu của một nước ngoài có thể giúp người khiếm thính giao tiếp với người khiếm thính khác từ khắp nơi trên thế giới."
        },
        {
            question: "Tôi muốn đóng góp thêm tư liệu, tôi phải làm sao?",
            answer: "Bạn chỉ cần tự quay video của mình làm ngôn ngữ kí hiệu nào bạn muốn và gửi về cho chúng mình. Thông tin chi tiết bạn có thể xem ở trang đóng góp nhé."
        },
        {
            question: "Cách tạo tài khoản học tập?",
            answer: "Bạn vào mục đăng ký ở góc phải phía trên màn hình và nhập vào các trường được yêu cầu. Các bạn nhớ lưu ý nhớ mật khẩu đó nha."
        },
        {
            question: "Tôi có một số vấn đề muốn được giải đáp trực tiếp, vậy thì tôi phải liên hệ với các bạn qua đâu",
            answer: ""
        }
    ];

    return (
        <div className={classes['homepage6']}>
            <hr className={classes['homepage3-hr-1']} />
            <h1 className={classes['homepage6-h']}>Câu hỏi thường gặp</h1>
            <hr className={classes['homepage3-hr-2']} />
            <div className={classes['homepage6-b']}>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <div key={index} className={classes['homepage6-b-q']} onClick={() => toggle(index)}>
                                {faq.question}
                            </div>
                            <Collapse in={openedIndex === index}>
                                <Text className={classes['homepage6-b-a']}>{faq.answer}</Text>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default QnA;