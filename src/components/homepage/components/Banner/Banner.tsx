'use client'
import { useRouter } from 'next/navigation';
import classes from './Banner.module.css';
import { Button } from '@mantine/core';


const Banner = () => {
    const router = useRouter()
    const handleClickStart = () => {
        router.push('/course_base/courses')
    }
    return (
        <div className={classes['homepage1']}>
            <h1 className={classes['logo']}>
                Signlearn
            </h1>
            <div className={classes['p1']}>Học ngôn ngữ kí hiệu dễ dàng và hiệu quả</div>
            <Button className={classes['button1']} variant="filled" size="lg" radius="xl"
                onClick={() => { handleClickStart() }}
            >
                BẮT ĐẦU NGAY
            </Button>
        </div>
    )
}

export default Banner;