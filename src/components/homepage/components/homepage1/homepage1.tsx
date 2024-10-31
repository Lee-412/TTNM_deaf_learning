
import classes from './homepage1.module.css';
import { Button } from '@mantine/core';




const HomePage1 = () => {
    return (
        <div className={classes['homepage1']}>
            <h1 className={classes['logo']}>
                Signlearn
            </h1>
            <div className={classes['p1']}>Học ngôn ngữ kĩ kiệu dễ dàng và hiệu quả</div>
            <Button className={classes['button1']} variant="filled" size="lg" radius="xl">BẮT ĐẦU NGAY</Button>
        </div>
    )
}

export default HomePage1;