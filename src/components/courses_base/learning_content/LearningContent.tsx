import './LearningContent.css'

// Đây là nội dung của phần học

const LearningContent = () => {
    return (
        <div className="learning-container">

            <div className="learning-content">
                <div className="learning-title">
                    <span>Màu sắc</span>
                </div>

                <div className="learning-definition">
                    <p style={{textAlign: "center"}}>Mau xanh da troi</p>
                    <p style={{textAlign: "center"}}>Loai tu: danh tu</p>
                </div>

                <div className="learning-video">
                    Day la video
                </div>
            </div>

            <button className='btn-next'>
                Next &gt;&gt;&gt;
            </button>
        </div>
    );
}

export default LearningContent;