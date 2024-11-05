
import classes from './Specialness.module.css';
const Specialness = () => {

    return (
        <div className={classes['homepage4']}>
            <div className={classes['homepage4-1']}>

            </div>
            <div className={classes['homepage4-2']}>
                <div className={classes['homepage4-2-h']}>
                    <hr className={classes['homepage3-hr-1']} />
                    <h1>Điểm đặc biệt ở Signlearn</h1>
                    <hr className={classes['homepage3-hr-2']} />
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
    )
}

export default Specialness;