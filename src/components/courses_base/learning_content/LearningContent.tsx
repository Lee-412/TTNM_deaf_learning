import './LearningContent.css'

const LearningContent = () => {
    return (
        <div className="learning-container">
            <h1>Learning Content</h1>

            <div className="learning-content">
                <div className="learning-title">
                    Color
                </div>

                <div className="learning-definition">
                    <p>Mau xanh da troi</p>
                    <p>Loai tu: danh tu</p>
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