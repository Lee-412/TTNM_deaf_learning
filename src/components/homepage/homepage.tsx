"use client"
import { Container, Divider } from "@mantine/core";
import classes from './homepage.module.css';
import { Button } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Group, Text, Collapse, Box } from '@mantine/core';
import { FocusTrap, TextInput } from '@mantine/core';



const HomePage = () => {
    const [opened1, { toggle: toggle1 }] = useDisclosure(false); // Đối tượng 1
    const [opened2, { toggle: toggle2 }] = useDisclosure(false); // Đối tượng 2
    const [opened3, { toggle: toggle3 }] = useDisclosure(false); // Đối tượng 3
    const [opened4, { toggle: toggle4 }] = useDisclosure(false); // Đối tượng 1
    const [opened5, { toggle: toggle5 }] = useDisclosure(false); // Đối tượng 2
    const [opened6, { toggle: toggle6 }] = useDisclosure(false);


    return (
        <div>
            <div className={classes['homepage1']}>
                <h1 className={classes['logo']}>
                    Signlearn
                </h1>
                <p className={classes['p1']}>Học ngôn ngữ kĩ kiệu dễ dàng và hiệu quả</p>
                <Button className={classes['button1']} variant="filled" size="lg" radius="xl">BẮT ĐẦU NGAY</Button>
            </div>
            <div className={classes['homepage2']}>
                <div className={classes['homepage2-1']}>
                    <h1 className={classes['h1-homepage2-1']}>Về Signlearn</h1>
                    <ul>
                        <li><p><b>Signlearn</b> là một nền tảng trực tuyến học ngôn ngữ kỹ hiệu. Nơi giúp mọi người có thể học và sử dụng ngôn ngữ kí hiệu một cách trực quan và sinh động</p></li>
                        <li><p><b>Signlearn</b> sẽ là cầu nối đưa ngôn ngữ kí hiệu đến gần  hơn với mọi người và thực hiện mục tiêu  xã hội:<br />
                            <i>"Xóa bỏ rào cản trong giao tiếp và tăng cường giáo dục giữa các cộng đồng với nhau" </i></p></li>
                    </ul>
                    <div className={classes['button-homepage2-1']}>
                        <Button variant="outline" size="md" radius="xl">Tìm hiểu thêm</Button>;
                    </div>

                </div>
                <div className={classes['homepage2-2']}>

                </div>
            </div>
            <div className={classes['homepage3']}>
                <hr className={classes['homepage3-hr-1']} />
                <h1 className={classes['homepage3-h1']}>Lý do bạn nên chọn Signlearn để học ngôn ngữ kí hiệu</h1>
                <hr className={classes['homepage3-hr-2']} />
                <div className={classes['homepage3-1']}>
                    <div className={classes['homepage3-1-1']}>
                        <img src="https://img.icons8.com/?size=100&id=53376&format=png&color=000000" alt="" />
                        <h3>Tiện lợi</h3>
                        <p>Học mọi lúc mọi nơi, bất cứ khi nào bạn muốn</p>
                    </div>
                    <div className={classes['homepage3-1-1']}>
                        <img src="https://img.icons8.com/?size=100&id=84635&format=png&color=000000" alt="" />
                        <h3>Cá nhân hóa trải nhiệm học tập</h3>
                        <p>Kết hợp giữa AI (trí thông minh nhân tạo) và khoa học ngôn ngữ, tạo ra các bài học cá nhân hóa giúp bạn học ở đúng tiến độ và cấp độ phù hợp<param name="" value="" /></p>
                    </div>
                    <div className={classes['homepage3-1-1']}>
                        <img src="https://img.icons8.com/?size=100&id=0Jj2OFqGGRVZ&format=png&color=000000" alt="" />
                        <h3>Ghi nhớ nhanh</h3>
                        <p>Áp dụng các phương pháp học tập thông minh giúp bạn có thể ghi nhớ dễ dàng</p>
                    </div>
                </div>
            </div>
            <div className={classes['homepage4']}>
                <div className={classes['homepage4-1']}>

                </div>
                <div className={classes['homepage4-2']}>
                    <div className={classes['homepage4-2-h']}>
                        <h1>Điểm đặc biệt ở Signlearn</h1>
                    </div>
                    <div className={classes['homepage4-2-b']}>
                        <div className={classes['homepage4-2-b-1']}>
                            <h3>Đa dạng</h3>
                            <p>Ngoài thử ngữ Việt, Signlearn còn cung
                                cấp hai ngôn ngữ ký hiệu của nước Mỹ (ASL) và Nhật Bản (JSL),
                                giúp mọi người có thể giao tiếp với những người khiếm thính ở các quốc gia hác một cách dễ dàng.</p>
                        </div>
                        <div className={classes['homepage4-2-b-1']}>
                            <h3>Tiên tiến</h3>
                            <p>Được tích hợp trí tuệ nhân tạo (AI) giúp kiểm tra cử chỉ của bạn một cách nhanh chóng và chính xác.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['homepage5']}>
                <hr className={classes['homepage3-hr-1']} />
                <h1 className={classes['homepage5-h']}>Đội ngũ sáng lập</h1>
                <hr className={classes['homepage3-hr-2']} />
                <div className={classes['homepage5-img']}>
                    <div className={classes['homepage5-img']}>
                        <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/358458896_1765371853877476_4161034464856036752_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmrBoQEncu_xdV7TbbCzu3YZxgscC7g3dhnGCxwLuDZFvMoX1D1iBeKr8fCofWjRoq2gNu_nU8PbxavJT5H7B&_nc_ohc=CC1-PIWLBEAQ7kNvgHq-l-H&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AKOwASdlF-b5kw8as_GGk25&oh=00_AYBDVOaO4kofCfsT29oxS39GV_EvTambLIhOBWKiOVBFDA&oe=6727C67C" alt="" />
                    </div>
                    <div className={classes['homepage5-img']}>
                        <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/358458896_1765371853877476_4161034464856036752_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmrBoQEncu_xdV7TbbCzu3YZxgscC7g3dhnGCxwLuDZFvMoX1D1iBeKr8fCofWjRoq2gNu_nU8PbxavJT5H7B&_nc_ohc=CC1-PIWLBEAQ7kNvgHq-l-H&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AKOwASdlF-b5kw8as_GGk25&oh=00_AYBDVOaO4kofCfsT29oxS39GV_EvTambLIhOBWKiOVBFDA&oe=6727C67C" alt="" />
                    </div>
                    <div className={classes['homepage5-img']}>
                        <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/358458896_1765371853877476_4161034464856036752_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmrBoQEncu_xdV7TbbCzu3YZxgscC7g3dhnGCxwLuDZFvMoX1D1iBeKr8fCofWjRoq2gNu_nU8PbxavJT5H7B&_nc_ohc=CC1-PIWLBEAQ7kNvgHq-l-H&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AKOwASdlF-b5kw8as_GGk25&oh=00_AYBDVOaO4kofCfsT29oxS39GV_EvTambLIhOBWKiOVBFDA&oe=6727C67C" alt="" />
                    </div>
                    <div className={classes['homepage5-img']}>
                        <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/358458896_1765371853877476_4161034464856036752_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmrBoQEncu_xdV7TbbCzu3YZxgscC7g3dhnGCxwLuDZFvMoX1D1iBeKr8fCofWjRoq2gNu_nU8PbxavJT5H7B&_nc_ohc=CC1-PIWLBEAQ7kNvgHq-l-H&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AKOwASdlF-b5kw8as_GGk25&oh=00_AYBDVOaO4kofCfsT29oxS39GV_EvTambLIhOBWKiOVBFDA&oe=6727C67C" alt="" />
                    </div>
                </div>
            </div>

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

            <div className={classes['homepage7']}>
                <h1 className={classes['homepage7-h']}>Liên hệ với chúng tôi</h1>
                <div className={classes['homepage7-b']}>
                    <div className={classes['homepage7-b-1']}>
                        <TextInput mt="sm" label="Name" placeholder="Name" />
                        <TextInput mt="sm" label="Email" placeholder="Email" />
                        <TextInput mt="sm" label="Message" placeholder="Message" />
                        <div style={{ textAlign: 'center', marginTop: '5%' }} >
                            <Button style={{ width: '60%', borderRadius: '10cap' }}>Send</Button>
                        </div>

                    </div>
                    <div className={classes['homepage7-b-2']}>
                        <ul>
                            <li style={{ display: 'flex' }}>
                                <img src="https://img.icons8.com/?size=100&id=J5tyvAWzAr1T&format=png&color=000000" alt="" />
                                <div className={classes['homepage7-b-2-text']}>
                                    <h5>Phone</h5>
                                    <p>2390183908123890</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <img src="https://img.icons8.com/?size=100&id=X0mEIh0RyDdL&format=png&color=000000" alt="" />
                                <div className={classes['homepage7-b-2-text']}>
                                    <h5>Email</h5>
                                    <p>asddfas@gmal.com</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                                <div className={classes['homepage7-b-2-text']}>
                                    <h5>Facebook</h5>
                                    <p>facebook.com/abcxyz</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;