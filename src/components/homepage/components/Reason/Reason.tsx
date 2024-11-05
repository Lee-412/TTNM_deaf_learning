
import classes from './Reason.module.css';

const Reason = () => {
    return (
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

    )
}

export default Reason;