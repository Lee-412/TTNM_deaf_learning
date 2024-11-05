
import classes from './About.module.css';
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

const About = () => {
    const router = useRouter()
    const handleClickStart = () => {
        router.push('/about')
    }
    return (

        <div className={classes['homepage2']}>
            <div className={classes['homepage2-1']}>
                <h1 className={classes['h1-homepage2-1']}>Về Signlearn</h1>
                <ul>
                    <li><b>Signlearn</b> là một nền tảng trực tuyến học ngôn ngữ kỹ hiệu. Nơi giúp mọi người có thể học và sử dụng ngôn ngữ kí hiệu một cách trực quan và sinh động</li>
                    <li><b>Signlearn</b> sẽ là cầu nối đưa ngôn ngữ kí hiệu đến gần  hơn với mọi người và thực hiện mục tiêu  xã hội:<br />
                        <i>"Xóa bỏ rào cản trong giao tiếp và tăng cường giáo dục giữa các cộng đồng với nhau" </i></li>
                </ul>
                <div className={classes['button-homepage2-1']}>
                    <Button className={classes['button-1']} style={{ fontWeight: '700' }} variant="outline" size="md" radius="xl" onClick={() => handleClickStart()}>Tìm hiểu thêm</Button>
                </div>
            </div>
            <div className={classes['homepage2-2']}>
            </div>
        </div>

    )
}
export default About;