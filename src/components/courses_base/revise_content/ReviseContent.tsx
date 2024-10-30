import "./ReviseContent.css";

// Đây là nội dung của phần ôn tập

const ReviseContent = () => {
    return (
        <div className="revise-container">

            <div className="revise-content">
                <div className="revise-title">
                    <span>Màu sắc</span>
                </div>


                <div className="revise-video">
                    Day la video
                </div>
            </div>

            <div className="revise-question">
                    <p style={{textAlign: "center"}}>Day la mau gi dcmm</p>
                    <ul>
                        <li>Do</li>
                        <li>Xanh</li>
                        <li>Vang</li>
                    </ul>
                </div>

            <button className='btn-next'>
                Next &gt;&gt;&gt;
            </button>
        </div>
    );
    }

    export default ReviseContent;