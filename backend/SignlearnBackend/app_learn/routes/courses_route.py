import os
from flask import jsonify, request,Blueprint,url_for
from app_learn.extensions import db
from ..models import LearningData
courses = Blueprint('courses',__name__)
from flask import current_app
from googletrans import Translator
from flask import jsonify, request, Blueprint
from moviepy import VideoFileClip
import numpy as np


@courses.route('/courses', methods=['GET'])
def get_courses():
    response_code = 200
    try:
        courses = db.session.query(LearningData).all()
        courses_list = [
            {
                "id": course.id,
                "name": course.name,
                "target": course.target,
                "data": course.data
            } for course in courses
        ]
    except Exception as e:
        response_code = 500
        return {"message": "Error fetching courses", "error": str(e)}, response_code
    return jsonify(courses_list), response_code   


VIDEO_FOLDER = "train/"
if not os.path.exists(VIDEO_FOLDER):
    os.makedirs(VIDEO_FOLDER)

def extract_video_name(video_path):
    video_name_with_extension = os.path.basename(video_path)
    video_name = os.path.splitext(video_name_with_extension)[0]
    return video_name


def translate_to_english(video_name):
    print("hit translate",video_name)

    if not video_name or not isinstance(video_name, str):
        print("Invalid video_name:", video_name)
        return None

    translator = Translator()

    try:
        translated = translator.translate(video_name, src='vi', dest='en')
        if translated and translated.text:
            print(f"Translated '{video_name}' to '{translated.text}'")
            return translated.text
        else:
            print(f"No translation result for '{video_name}'")
            return None
    except Exception as e:
        print(f"Error translating video_name '{video_name}': {e}")
        return None



def get_videos_in_folder(folder_path):
   
    if not os.path.exists(folder_path):
        return []
    all_files = os.listdir(folder_path)  
    video_files = [f for f in all_files if f.endswith(('.mp4', '.webm'))] 
    return video_files


@courses.route('/process_video', methods=['POST'])
def process_video():
    file = request.files.get("video")
    print('file',file)
    if not file:
        text = request.form.get("text_name")
        print("text_name",text)

        if not text:
            print('hit here')
            return jsonify({"error": "No video file uploaded"}), 400

    try:
        if file:
            video_name = os.path.splitext(file.filename)[0]
        else :
            video_name = os.path.splitext(text)[0]

        print("video_name" , video_name)
        english_name = translate_to_english(video_name)
        if not english_name:
            print("no english name")
        print("english_name", english_name)
        folder_path = os.path.join(current_app.static_folder, english_name)
        
        os.makedirs(folder_path, exist_ok=True)
        
        videos = get_videos_in_folder(folder_path)
        
        if videos:
            video_urls = [url_for('static', filename=f'/{english_name}/{video}') 
                         for video in videos]
            
            response_data = {
                "video_name": video_name,
                "english_name": english_name,
                "video_urls": video_urls
            }
        else:
            response_data = {"error": f"No videos found in folder '{folder_path}'"}
            
    except Exception as e:
        response_data = {"error": str(e)}
        
    return jsonify(response_data)

videos_data = [
    { "gross": "địa chỉ", "url": "https://qipedc.moet.gov.vn/videos/D0001B.mp4" },
    { "gross": "địa chỉ", "url": "https://qipedc.moet.gov.vn/videos/D0001N.mp4" },
    { "gross": "địa chỉ", "url": "https://qipedc.moet.gov.vn/videos/D0001T.mp4" },
    { "gross": "tỉnh", "url": "https://qipedc.moet.gov.vn/videos/D0002.mp4" },
    { "gross": "tiếp tân", "url": "https://qipedc.moet.gov.vn/videos/D0003.mp4" },
     {
    "gross": "nhân viên",
    "url": "https://qipedc.moet.gov.vn/videos/D0004.mp4"
  },
  {
    "gross": "Miến Điện (nước Mi-an-ma)",
    "url": "https://qipedc.moet.gov.vn/videos/D0005B.mp4"
  },
  {
    "gross": "Miến Điện (nước Mi-an-ma)",
    "url": "https://qipedc.moet.gov.vn/videos/D0005N.mp4"
  },
  {
    "gross": "Miến Điện (nước Mi-an-ma)",
    "url": "https://qipedc.moet.gov.vn/videos/D0005T.mp4"
  },
  {
    "gross": "Ma Cao",
    "url": "https://qipedc.moet.gov.vn/videos/D0006.mp4"
  },
  {
    "gross": "Do Thái",
    "url": "https://qipedc.moet.gov.vn/videos/D0007.mp4"
  },
  {
    "gross": "Ả Rập (nước Ả Rập)",
    "url": "https://qipedc.moet.gov.vn/videos/D0008.mp4"
  },
  {
    "gross": "phương Tây",
    "url": "https://qipedc.moet.gov.vn/videos/D0009.mp4"
  },
  {
    "gross": "phương Đông",
    "url": "https://qipedc.moet.gov.vn/videos/D0010.mp4"
  },
  {
    "gross": "Đu Bai (nước Đu Bai)",
    "url": "https://qipedc.moet.gov.vn/videos/D0011.mp4"
  },
  {
    "gross": "Albania (nước Albania)",
    "url": "https://qipedc.moet.gov.vn/videos/D0012.mp4"
  },
  {
    "gross": "người nước ngoài",
    "url": "https://qipedc.moet.gov.vn/videos/D0013.mp4"
  },
  {
    "gross": "nhập khẩu",
    "url": "https://qipedc.moet.gov.vn/videos/D0014.mp4"
  },
  {
    "gross": "Tuy Hoà",
    "url": "https://qipedc.moet.gov.vn/videos/D0015.mp4"
  },
  {
    "gross": "Quy Nhơn",
    "url": "https://qipedc.moet.gov.vn/videos/D0016.mp4"
  },
  {
    "gross": "hấp dẫn",
    "url": "https://qipedc.moet.gov.vn/videos/D0017.mp4"
  },
  {
    "gross": "nổi da gà",
    "url": "https://qipedc.moet.gov.vn/videos/D0018.mp4"
  },
  {
    "gross": "ghen tị",
    "url": "https://qipedc.moet.gov.vn/videos/D0019B.mp4"
  },
  {
    "gross": "ghen tị",
    "url": "https://qipedc.moet.gov.vn/videos/D0019N.mp4"
  },
  {
    "gross": "ghen tị",
    "url": "https://qipedc.moet.gov.vn/videos/D0019T.mp4"
  },
  {
    "gross": "lung tung",
    "url": "https://qipedc.moet.gov.vn/videos/D0020B.mp4"
  },
  {
    "gross": "lung tung",
    "url": "https://qipedc.moet.gov.vn/videos/D0020N.mp4"
  },
  {
    "gross": "lung tung",
    "url": "https://qipedc.moet.gov.vn/videos/D0020T.mp4"
  },
  {
    "gross": "hói đầu",
    "url": "https://qipedc.moet.gov.vn/videos/D0021.mp4"
  },
  {
    "gross": "cười nhếch mép",
    "url": "https://qipedc.moet.gov.vn/videos/D0022.mp4"
  },
  {
    "gross": "cười vỡ bụng",
    "url": "https://qipedc.moet.gov.vn/videos/D0023.mp4"
  },
  {
    "gross": "tham ăn",
    "url": "https://qipedc.moet.gov.vn/videos/D0024B.mp4"
  },
  {
    "gross": "tham ăn",
    "url": "https://qipedc.moet.gov.vn/videos/D0024N.mp4"
  },
  {
    "gross": "tham ăn",
    "url": "https://qipedc.moet.gov.vn/videos/D0024T.mp4"
  },
  {
    "gross": "thèm",
    "url": "https://qipedc.moet.gov.vn/videos/D0026.mp4"
  },
  {
    "gross": "thèm rỏ dãi",
    "url": "https://qipedc.moet.gov.vn/videos/D0027.mp4"
  },
  {
    "gross": "đứng đầu (hàng đầu)",
    "url": "https://qipedc.moet.gov.vn/videos/D0028.mp4"
  },
  {
    "gross": "thói quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0029B.mp4"
  },
  {
    "gross": "thói quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0029N.mp4"
  },
  {
    "gross": "thói quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0029T.mp4"
  },
  {
    "gross": "khuyến khích",
    "url": "https://qipedc.moet.gov.vn/videos/D0030.mp4"
  },
  {
    "gross": "không nghe lời",
    "url": "https://qipedc.moet.gov.vn/videos/D0031B.mp4"
  },
  {
    "gross": "không nghe lời",
    "url": "https://qipedc.moet.gov.vn/videos/D0031N.mp4"
  },
  {
    "gross": "không nghe lời",
    "url": "https://qipedc.moet.gov.vn/videos/D0031T.mp4"
  },
  {
    "gross": "ai cho",
    "url": "https://qipedc.moet.gov.vn/videos/D0032.mp4"
  },
  {
    "gross": "không cho",
    "url": "https://qipedc.moet.gov.vn/videos/D0033B.mp4"
  },
  {
    "gross": "không cho",
    "url": "https://qipedc.moet.gov.vn/videos/D0033N.mp4"
  },
  {
    "gross": "không cho",
    "url": "https://qipedc.moet.gov.vn/videos/D0033T.mp4"
  },
  {
    "gross": "không cần",
    "url": "https://qipedc.moet.gov.vn/videos/D0034.mp4"
  },
  {
    "gross": "không nên",
    "url": "https://qipedc.moet.gov.vn/videos/D0035B.mp4"
  },
  {
    "gross": "không nên",
    "url": "https://qipedc.moet.gov.vn/videos/D0035N.mp4"
  },
  {
    "gross": "không nên",
    "url": "https://qipedc.moet.gov.vn/videos/D0035T.mp4"
  },
  {
    "gross": "bực mình",
    "url": "https://qipedc.moet.gov.vn/videos/D0036.mp4"
  },
  {
    "gross": "tự giác",
    "url": "https://qipedc.moet.gov.vn/videos/D0037.mp4"
  },
  {
    "gross": "mù chữ",
    "url": "https://qipedc.moet.gov.vn/videos/D0038.mp4"
  },
  {
    "gross": "vô tình",
    "url": "https://qipedc.moet.gov.vn/videos/D0039.mp4"
  },
  {
    "gross": "Tết hàn thực",
    "url": "https://qipedc.moet.gov.vn/videos/D0040B.mp4"
  },
  {
    "gross": "Tết hàn thực",
    "url": "https://qipedc.moet.gov.vn/videos/D0040N.mp4"
  },
  {
    "gross": "Tết hàn thực",
    "url": "https://qipedc.moet.gov.vn/videos/D0040T.mp4"
  },
  {
    "gross": "giỗ",
    "url": "https://qipedc.moet.gov.vn/videos/D0041.mp4"
  },
  {
    "gross": "ngày Quốc tế phụ nữ 8/3",
    "url": "https://qipedc.moet.gov.vn/videos/D0042B.mp4"
  },
  {
    "gross": "ngày Quốc tế phụ nữ 8/3",
    "url": "https://qipedc.moet.gov.vn/videos/D0042N.mp4"
  },
  {
    "gross": "ngày Quốc tế phụ nữ 8/3",
    "url": "https://qipedc.moet.gov.vn/videos/D0042T.mp4"
  },
  {
    "gross": "ngày giải phóng thủ đô 10/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0043B.mp4"
  },
  {
    "gross": "ngày giải phóng thủ đô 10/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0043N.mp4"
  },
  {
    "gross": "ngày giải phóng thủ đô 10/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0043T.mp4"
  },
  {
    "gross": "ngày Giải phóng miền Nam 30/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0044B.mp4"
  },
  {
    "gross": "ngày Giải phóng miền Nam 30/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0044N.mp4"
  },
  {
    "gross": "ngày Giải phóng miền Nam 30/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0044T.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Việt Nam 18/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0045B.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Việt Nam 18/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0045N.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Việt Nam 18/4",
    "url": "https://qipedc.moet.gov.vn/videos/D0045T.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Thế giới 3/12",
    "url": "https://qipedc.moet.gov.vn/videos/D0046B.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Thế giới 3/12",
    "url": "https://qipedc.moet.gov.vn/videos/D0046N.mp4"
  },
  {
    "gross": "ngày Người khuyết tật Thế giới 3/12",
    "url": "https://qipedc.moet.gov.vn/videos/D0046T.mp4"
  },
  {
    "gross": "lễ Halloween 31/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0048B.mp4"
  },
  {
    "gross": "lễ Halloween 31/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0048N.mp4"
  },
  {
    "gross": "lễ Halloween 31/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0048T.mp4"
  },
  {
    "gross": "ngày Phụ nữ Việt Nam 20/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0049B.mp4"
  },
  {
    "gross": "ngày Phụ nữ Việt Nam 20/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0049N.mp4"
  },
  {
    "gross": "ngày Phụ nữ Việt Nam 20/10",
    "url": "https://qipedc.moet.gov.vn/videos/D0049T.mp4"
  },
  {
    "gross": "ngày thương bình liệt sĩ 27/7",
    "url": "https://qipedc.moet.gov.vn/videos/D0050B.mp4"
  },
  {
    "gross": "ngày thương bình liệt sĩ 27/7",
    "url": "https://qipedc.moet.gov.vn/videos/D0050N.mp4"
  },
  {
    "gross": "ngày thương bình liệt sĩ 27/7",
    "url": "https://qipedc.moet.gov.vn/videos/D0050T.mp4"
  },
  {
    "gross": "ngày giỗ tổ Hùng Vương (âm lịch 10/3)",
    "url": "https://qipedc.moet.gov.vn/videos/D0051B.mp4"
  },
  {
    "gross": "ngày giỗ tổ Hùng Vương (âm lịch 10/3)",
    "url": "https://qipedc.moet.gov.vn/videos/D0051N.mp4"
  },
  {
    "gross": "ngày giỗ tổ Hùng Vương (âm lịch 10/3)",
    "url": "https://qipedc.moet.gov.vn/videos/D0051T.mp4"
  },
  {
    "gross": "ngày Ngôn ngữ kí hiệu Quốc tế 23/9",
    "url": "https://qipedc.moet.gov.vn/videos/D0052B.mp4"
  },
  {
    "gross": "ngày Ngôn ngữ kí hiệu Quốc tế 23/9",
    "url": "https://qipedc.moet.gov.vn/videos/D0052N.mp4"
  },
  {
    "gross": "ngày Ngôn ngữ kí hiệu Quốc tế 23/9",
    "url": "https://qipedc.moet.gov.vn/videos/D0052T.mp4"
  },
  {
    "gross": "tuần lễ người Điếc thế giới",
    "url": "https://qipedc.moet.gov.vn/videos/D0053B.mp4"
  },
  {
    "gross": "tuần lễ người Điếc thế giới",
    "url": "https://qipedc.moet.gov.vn/videos/D0053N.mp4"
  },
  {
    "gross": "tuần lễ người Điếc thế giới",
    "url": "https://qipedc.moet.gov.vn/videos/D0053T.mp4"
  },
  {
    "gross": "ngày của Mẹ",
    "url": "https://qipedc.moet.gov.vn/videos/D0054B.mp4"
  },
  {
    "gross": "ngày của Mẹ",
    "url": "https://qipedc.moet.gov.vn/videos/D0054N.mp4"
  },
  {
    "gross": "ngày của Mẹ",
    "url": "https://qipedc.moet.gov.vn/videos/D0054T.mp4"
  },
  {
    "gross": "ngày của Cha",
    "url": "https://qipedc.moet.gov.vn/videos/D0055B.mp4"
  },
  {
    "gross": "ngày của Cha",
    "url": "https://qipedc.moet.gov.vn/videos/D0055N.mp4"
  },
  {
    "gross": "ngày của Cha",
    "url": "https://qipedc.moet.gov.vn/videos/D0055T.mp4"
  },
  {
    "gross": "ngày gia đình Việt Nam 28/6",
    "url": "https://qipedc.moet.gov.vn/videos/D0056B.mp4"
  },
  {
    "gross": "ngày gia đình Việt Nam 28/6",
    "url": "https://qipedc.moet.gov.vn/videos/D0056N.mp4"
  },
  {
    "gross": "ngày gia đình Việt Nam 28/6",
    "url": "https://qipedc.moet.gov.vn/videos/D0056T.mp4"
  },
  {
    "gross": "ngày thầy thuốc Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0057B.mp4"
  },
  {
    "gross": "ngày thầy thuốc Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0057N.mp4"
  },
  {
    "gross": "ngày thầy thuốc Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0057T.mp4"
  },
  {
    "gross": "ngày thành lập quân đội nhân dân Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0058B.mp4"
  },
  {
    "gross": "ngày thành lập quân đội nhân dân Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0058N.mp4"
  },
  {
    "gross": "ngày thành lập quân đội nhân dân Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0058T.mp4"
  },
  {
    "gross": "con cá sấu",
    "url": "https://qipedc.moet.gov.vn/videos/D0059.mp4"
  },
  {
    "gross": "nhầm",
    "url": "https://qipedc.moet.gov.vn/videos/D0060B.mp4"
  },
  {
    "gross": "nhầm",
    "url": "https://qipedc.moet.gov.vn/videos/D0060N.mp4"
  },
  {
    "gross": "nhầm",
    "url": "https://qipedc.moet.gov.vn/videos/D0060T.mp4"
  },
  {
    "gross": "đồng bằng sông Cửu Long",
    "url": "https://qipedc.moet.gov.vn/videos/D0061.mp4"
  },
  {
    "gross": "đồng bằng sông Hồng",
    "url": "https://qipedc.moet.gov.vn/videos/D0062.mp4"
  },
  {
    "gross": "đồng bằng duyên hải miền Trung",
    "url": "https://qipedc.moet.gov.vn/videos/D0063.mp4"
  },
  {
    "gross": "buồn thảm",
    "url": "https://qipedc.moet.gov.vn/videos/D0064.mp4"
  },
  {
    "gross": "mách",
    "url": "https://qipedc.moet.gov.vn/videos/D0065B.mp4"
  },
  {
    "gross": "mách",
    "url": "https://qipedc.moet.gov.vn/videos/D0065N.mp4"
  },
  {
    "gross": "mách",
    "url": "https://qipedc.moet.gov.vn/videos/D0065T.mp4"
  },
  {
    "gross": "vô duyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0066B.mp4"
  },
  {
    "gross": "vô duyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0066N.mp4"
  },
  {
    "gross": "vô duyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0066T.mp4"
  },
  {
    "gross": "ti hí mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0067.mp4"
  },
  {
    "gross": "kịp thời",
    "url": "https://qipedc.moet.gov.vn/videos/D0068.mp4"
  },
  {
    "gross": "bối rối",
    "url": "https://qipedc.moet.gov.vn/videos/D0069.mp4"
  },
  {
    "gross": "hú vía",
    "url": "https://qipedc.moet.gov.vn/videos/D0070.mp4"
  },
  {
    "gross": "suỵt",
    "url": "https://qipedc.moet.gov.vn/videos/D0071.mp4"
  },
 {
    "gross": "suýt",
    "url": "https://qipedc.moet.gov.vn/videos/D0072B.mp4"
  },
  {
    "gross": "suýt",
    "url": "https://qipedc.moet.gov.vn/videos/D0072N.mp4"
  },
  {
    "gross": "suýt",
    "url": "https://qipedc.moet.gov.vn/videos/D0072T.mp4"
  },
  {
    "gross": "cá voi",
    "url": "https://qipedc.moet.gov.vn/videos/D0073.mp4"
  },
  {
    "gross": "cá kiếm",
    "url": "https://qipedc.moet.gov.vn/videos/D0074.mp4"
  },
  {
    "gross": "đuôi cá",
    "url": "https://qipedc.moet.gov.vn/videos/D0075.mp4"
  },
  {
    "gross": "đuôi chuột",
    "url": "https://qipedc.moet.gov.vn/videos/D0076.mp4"
  },
  {
    "gross": "bít tết (bò)",
    "url": "https://qipedc.moet.gov.vn/videos/D0077B.mp4"
  },
  {
    "gross": "bít tết (bò)",
    "url": "https://qipedc.moet.gov.vn/videos/D0077N.mp4"
  },
  {
    "gross": "bít tết (bò)",
    "url": "https://qipedc.moet.gov.vn/videos/D0077T.mp4"
  },
  {
    "gross": "súp",
    "url": "https://qipedc.moet.gov.vn/videos/D0078.mp4"
  },
  {
    "gross": "súp lơ",
    "url": "https://qipedc.moet.gov.vn/videos/D0079.mp4"
  },
  {
    "gross": "mỳ tôm",
    "url": "https://qipedc.moet.gov.vn/videos/D0080B.mp4"
  },
  {
    "gross": "mỳ tôm",
    "url": "https://qipedc.moet.gov.vn/videos/D0080N.mp4"
  },
  {
    "gross": "mỳ tôm",
    "url": "https://qipedc.moet.gov.vn/videos/D0080T.mp4"
  },
  {
    "gross": "mỳ vằn thắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0081B.mp4"
  },
  {
    "gross": "mỳ ý",
    "url": "https://qipedc.moet.gov.vn/videos/D0082B.mp4"
  },
  {
    "gross": "mỳ ý",
    "url": "https://qipedc.moet.gov.vn/videos/D0082N.mp4"
  },
  {
    "gross": "mỳ ý",
    "url": "https://qipedc.moet.gov.vn/videos/D0082T.mp4"
  },
  {
    "gross": "bún mắm",
    "url": "https://qipedc.moet.gov.vn/videos/D0083.mp4"
  },
  {
    "gross": "bún chả",
    "url": "https://qipedc.moet.gov.vn/videos/D0084.mp4"
  },
  {
    "gross": "bún ngan",
    "url": "https://qipedc.moet.gov.vn/videos/D0085.mp4"
  },
  {
    "gross": "bún ốc",
    "url": "https://qipedc.moet.gov.vn/videos/D0086.mp4"
  },
  {
    "gross": "bún đậu",
    "url": "https://qipedc.moet.gov.vn/videos/D0087B.mp4"
  },
  {
    "gross": "xôi gấc",
    "url": "https://qipedc.moet.gov.vn/videos/D0088.mp4"
  },
  {
    "gross": "xôi gà",
    "url": "https://qipedc.moet.gov.vn/videos/D0089.mp4"
  },
  {
    "gross": "cháo sườn",
    "url": "https://qipedc.moet.gov.vn/videos/D0090.mp4"
  },
  {
    "gross": "cơm rang",
    "url": "https://qipedc.moet.gov.vn/videos/D0091.mp4"
  },
  {
    "gross": "nhấn mạnh",
    "url": "https://qipedc.moet.gov.vn/videos/D0092.mp4"
  },
  {
    "gross": "đạo diễn",
    "url": "https://qipedc.moet.gov.vn/videos/D0093.mp4"
  },
  {
    "gross": "thí nghiệm",
    "url": "https://qipedc.moet.gov.vn/videos/D0094.mp4"
  },
  {
    "gross": "cắm trại",
    "url": "https://qipedc.moet.gov.vn/videos/D0095.mp4"
  },
  {
    "gross": "khả năng",
    "url": "https://qipedc.moet.gov.vn/videos/D0096.mp4"
  },
  {
    "gross": "kỹ năng",
    "url": "https://qipedc.moet.gov.vn/videos/D0097.mp4"
  },
  {
    "gross": "có … không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0098.mp4"
  },
  {
    "gross": "cung cấp",
    "url": "https://qipedc.moet.gov.vn/videos/D0099.mp4"
  },
  {
    "gross": "khờ dại",
    "url": "https://qipedc.moet.gov.vn/videos/D0100.mp4"
  },
  {
    "gross": "cực khổ",
    "url": "https://qipedc.moet.gov.vn/videos/D0101.mp4"
  },
  {
    "gross": "may mắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0102.mp4"
  },
  {
    "gross": "từ chối",
    "url": "https://qipedc.moet.gov.vn/videos/D0103B.mp4"
  },
  {
    "gross": "từ chối",
    "url": "https://qipedc.moet.gov.vn/videos/D0103N.mp4"
  },
  {
    "gross": "từ chối",
    "url": "https://qipedc.moet.gov.vn/videos/D0103T.mp4"
  },
  {
    "gross": "nấu nướng",
    "url": "https://qipedc.moet.gov.vn/videos/D0104.mp4"
  },
  {
    "gross": "xoa đầu",
    "url": "https://qipedc.moet.gov.vn/videos/D0105.mp4"
  },
  {
    "gross": "rực rỡ",
    "url": "https://qipedc.moet.gov.vn/videos/D0107.mp4"
  },
  {
    "gross": "thiệp sinh nhật",
    "url": "https://qipedc.moet.gov.vn/videos/D0108B.mp4"
  },
  {
    "gross": "thiệp sinh nhật",
    "url": "https://qipedc.moet.gov.vn/videos/D0108N.mp4"
  },
  {
    "gross": "thiệp sinh nhật",
    "url": "https://qipedc.moet.gov.vn/videos/D0108T.mp4"
  },
  {
    "gross": "không quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0109B.mp4"
  },
  {
    "gross": "không quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0109N.mp4"
  },
  {
    "gross": "không quen",
    "url": "https://qipedc.moet.gov.vn/videos/D0109T.mp4"
  },
  {
    "gross": "bánh tráng",
    "url": "https://qipedc.moet.gov.vn/videos/D0110.mp4"
  },
  {
    "gross": "tương ớt",
    "url": "https://qipedc.moet.gov.vn/videos/D0111B.mp4"
  },
  {
    "gross": "tương ớt",
    "url": "https://qipedc.moet.gov.vn/videos/D0111N.mp4"
  },
  {
    "gross": "tương ớt",
    "url": "https://qipedc.moet.gov.vn/videos/D0111T.mp4"
  },
  {
    "gross": "không có",
    "url": "https://qipedc.moet.gov.vn/videos/D0112.mp4"
  },
  {
    "gross": "không có chi",
    "url": "https://qipedc.moet.gov.vn/videos/D0113.mp4"
  },
  {
    "gross": "dân chủ",
    "url": "https://qipedc.moet.gov.vn/videos/D0114.mp4"
  },
  {
    "gross": "xử lý",
    "url": "https://qipedc.moet.gov.vn/videos/D0115.mp4"
  },
  {
    "gross": "đất ruộng",
    "url": "https://qipedc.moet.gov.vn/videos/D0116.mp4"
  },
  {
    "gross": "tinh mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0117.mp4"
  },
  {
    "gross": "cũng vậy/cũng thế",
    "url": "https://qipedc.moet.gov.vn/videos/D0118.mp4"
  },
  {
    "gross": "đúng không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0119B.mp4"
  },
  {
    "gross": "đúng không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0119N.mp4"
  },
  {
    "gross": "đúng không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0119T.mp4"
  },
  {
    "gross": "phải không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0120B.mp4"
  },
  {
    "gross": "phải không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0120N.mp4"
  },
  {
    "gross": "phải không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0120T.mp4"
  },
  {
    "gross": "còn bạn?",
    "url": "https://qipedc.moet.gov.vn/videos/D0121.mp4"
  },
  {
    "gross": "cần không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0122B.mp4"
  },
  {
    "gross": "cần không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0122N.mp4"
  },
  {
    "gross": "cần không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0122T.mp4"
  },
  {
    "gross": "nên không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0123B.mp4"
  },
  {
    "gross": "nên không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0123N.mp4"
  },
  {
    "gross": "nên không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0123T.mp4"
  },
  {
    "gross": "kia",
    "url": "https://qipedc.moet.gov.vn/videos/D0124.mp4"
  },
  {
    "gross": "nóng tính",
    "url": "https://qipedc.moet.gov.vn/videos/D0125.mp4"
  },
  {
    "gross": "sợ không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0126.mp4"
  },
  {
    "gross": "căm thù",
    "url": "https://qipedc.moet.gov.vn/videos/D0127.mp4"
  },
  {
    "gross": "đẹp không? (người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0128B.mp4"
  },
  {
    "gross": "đẹp không? (người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0128N.mp4"
  },
  {
    "gross": "đẹp không? (người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0128T.mp4"
  },
  {
    "gross": "không đẹp",
    "url": "https://qipedc.moet.gov.vn/videos/D0129B.mp4"
  },
  {
    "gross": "không đẹp",
    "url": "https://qipedc.moet.gov.vn/videos/D0129N.mp4"
  },
  {
    "gross": "không đẹp",
    "url": "https://qipedc.moet.gov.vn/videos/D0129T.mp4"
  },
  {
    "gross": "chúng tôi (2 người) (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0130.mp4"
  },
  {
    "gross": "chúng tôi (3 người) (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0131.mp4"
  },
  {
    "gross": "chúng tôi (4 người) (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0132.mp4"
  },
  {
    "gross": "chúng tôi (5 người) (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0133.mp4"
  },
  {
    "gross": "chúng tôi (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0134.mp4"
  },
  {
    "gross": "các bạn (2 người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0135.mp4"
  },
  {
    "gross": "họ (2 người) (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0136.mp4"
  },
  {
    "gross": "họ (đại từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0137.mp4"
  },
  {
    "gross": "bạn yêu tôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0138.mp4"
  },
  {
    "gross": "tôi yêu bạn ấy",
    "url": "https://qipedc.moet.gov.vn/videos/D0139.mp4"
  },
  {
    "gross": "bạn ấy yêu tôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0140.mp4"
  },
  {
    "gross": "bạn yêu bạn ấy",
    "url": "https://qipedc.moet.gov.vn/videos/D0141.mp4"
  },
  {
    "gross": "bạn ấy yêu bạn",
    "url": "https://qipedc.moet.gov.vn/videos/D0142.mp4"
  },
  {
    "gross": "anh hai, anh cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0143B.mp4"
  },
  {
    "gross": "anh hai, anh cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0143N.mp4"
  },
  {
    "gross": "anh hai, anh cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0143T.mp4"
  },
  {
    "gross": "chị hai, chị cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0144B.mp4"
  },
  {
    "gross": "chị hai, chị cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0144N.mp4"
  },
  {
    "gross": "chị hai, chị cả",
    "url": "https://qipedc.moet.gov.vn/videos/D0144T.mp4"
  },
  {
    "gross": "quả bầu hồ lô",
    "url": "https://qipedc.moet.gov.vn/videos/D0145.mp4"
  },
  {
    "gross": "một là",
    "url": "https://qipedc.moet.gov.vn/videos/D0146.mp4"
  },
  {
    "gross": "hai là",
    "url": "https://qipedc.moet.gov.vn/videos/D0147.mp4"
  },
  {
    "gross": "ba là",
    "url": "https://qipedc.moet.gov.vn/videos/D0148.mp4"
  },
  {
    "gross": "bốn là",
    "url": "https://qipedc.moet.gov.vn/videos/D0149.mp4"
  },
  {
    "gross": "năm là",
    "url": "https://qipedc.moet.gov.vn/videos/D0150.mp4"
  },
  {
    "gross": "ông bà",
    "url": "https://qipedc.moet.gov.vn/videos/D0151B.mp4"
  },
  {
    "gross": "ông bà",
    "url": "https://qipedc.moet.gov.vn/videos/D0151N.mp4"
  },
  {
    "gross": "ông bà",
    "url": "https://qipedc.moet.gov.vn/videos/D0151T.mp4"
  },
  {
    "gross": "chị họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0152B.mp4"
  },
  {
    "gross": "chị họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0152N.mp4"
  },
  {
    "gross": "chị họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0152T.mp4"
  },
  {
    "gross": "em họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0153B.mp4"
  },
  {
    "gross": "em họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0153N.mp4"
  },
  {
    "gross": "em họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0153T.mp4"
  },
  {
    "gross": "cháu họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0154B.mp4"
  },
  {
    "gross": "cháu họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0154N.mp4"
  },
  {
    "gross": "cháu họ",
    "url": "https://qipedc.moet.gov.vn/videos/D0154T.mp4"
  },
  {
    "gross": "sống sót",
    "url": "https://qipedc.moet.gov.vn/videos/D0155B.mp4"
  },
  {
    "gross": "sống sót",
    "url": "https://qipedc.moet.gov.vn/videos/D0155N.mp4"
  },
  {
    "gross": "sống sót",
    "url": "https://qipedc.moet.gov.vn/videos/D0155T.mp4"
  },
  {
    "gross": "thường xuyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0156.mp4"
  },
  {
    "gross": "thường xuyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0156B.mp4"
  },
  {
    "gross": "thường xuyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0156N.mp4"
  },
  {
    "gross": "thường xuyên",
    "url": "https://qipedc.moet.gov.vn/videos/D0156T.mp4"
  },
  {
    "gross": "đi dạo",
    "url": "https://qipedc.moet.gov.vn/videos/D0157B.mp4"
  },
  {
    "gross": "đi dạo",
    "url": "https://qipedc.moet.gov.vn/videos/D0157N.mp4"
  },
  {
    "gross": "đi dạo",
    "url": "https://qipedc.moet.gov.vn/videos/D0157T.mp4"
  },
  {
    "gross": "về (Sài Gòn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0158N.mp4"
  },
  {
    "gross": "về 2 (Miền Bắc)",
    "url": "https://qipedc.moet.gov.vn/videos/D0159B.mp4"
  },
  {
    "gross": "về 2 (Miền Bắc)",
    "url": "https://qipedc.moet.gov.vn/videos/D0159T.mp4"
  },
  {
    "gross": "về 3 (đi về)",
    "url": "https://qipedc.moet.gov.vn/videos/D0160.mp4"
  },
  {
    "gross": "về 4 (từ nơi khác về)",
    "url": "https://qipedc.moet.gov.vn/videos/D0161.mp4"
  },
  {
    "gross": "về 5 (về nhà)",
    "url": "https://qipedc.moet.gov.vn/videos/D0162.mp4"
  },
  {
    "gross": "hẹn",
    "url": "https://qipedc.moet.gov.vn/videos/D0163B.mp4"
  },
  {
    "gross": "hẹn",
    "url": "https://qipedc.moet.gov.vn/videos/D0163N.mp4"
  },
  {
    "gross": "hẹn",
    "url": "https://qipedc.moet.gov.vn/videos/D0163T.mp4"
  },
  {
    "gross": "quyến luyến",
    "url": "https://qipedc.moet.gov.vn/videos/D0164.mp4"
  },
  {
    "gross": "hứa",
    "url": "https://qipedc.moet.gov.vn/videos/D0165B.mp4"
  },
  {
    "gross": "hứa",
    "url": "https://qipedc.moet.gov.vn/videos/D0165N.mp4"
  },
  {
    "gross": "hứa",
    "url": "https://qipedc.moet.gov.vn/videos/D0165T.mp4"
  },
  {
    "gross": "cùng / với (giới từ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0166.mp4"
  },
  {
    "gross": "lâu",
    "url": "https://qipedc.moet.gov.vn/videos/D0167.mp4"
  },
  {
    "gross": "lâu",
    "url": "https://qipedc.moet.gov.vn/videos/D0167B.mp4"
  },
  {
    "gross": "vẫn",
    "url": "https://qipedc.moet.gov.vn/videos/D0168B.mp4"
  },
  {
    "gross": "vẫn",
    "url": "https://qipedc.moet.gov.vn/videos/D0168N.mp4"
  },
  {
    "gross": "vẫn",
    "url": "https://qipedc.moet.gov.vn/videos/D0168T.mp4"
  },
  {
    "gross": "mỗi ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0169B.mp4"
  },
  {
    "gross": "mỗi ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0169N.mp4"
  },
  {
    "gross": "mỗi ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0169T.mp4"
  },
  {
    "gross": "hàng ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0170B.mp4"
  },
  {
    "gross": "hàng ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0170N.mp4"
  },
  {
    "gross": "hàng ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0170T.mp4"
  },
  {
    "gross": "ăn vú sữa (bằng thìa)",
    "url": "https://qipedc.moet.gov.vn/videos/D0171.mp4"
  },
  {
    "gross": "ăn vú sữa",
    "url": "https://qipedc.moet.gov.vn/videos/D0172.mp4"
  },
  {
    "gross": "hôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0173.mp4"
  },
  {
    "gross": "trông nhà",
    "url": "https://qipedc.moet.gov.vn/videos/D0174.mp4"
  },
  {
    "gross": "chạy (động vật)",
    "url": "https://qipedc.moet.gov.vn/videos/D0175.mp4"
  },
  {
    "gross": "xe container",
    "url": "https://qipedc.moet.gov.vn/videos/D0176.mp4"
  },
  {
    "gross": "bay nhanh (máy bay)",
    "url": "https://qipedc.moet.gov.vn/videos/D0177.mp4"
  },
  {
    "gross": "chậm chạp",
    "url": "https://qipedc.moet.gov.vn/videos/D0178.mp4"
  },
  {
    "gross": "ngừng lại",
    "url": "https://qipedc.moet.gov.vn/videos/D0179.mp4"
  },
  {
    "gross": "5 > 3 (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0180.mp4"
  },
  {
    "gross": "2 < 6 (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0181.mp4"
  },
  {
    "gross": "cung điện",
    "url": "https://qipedc.moet.gov.vn/videos/D0182B.mp4"
  },
  {
    "gross": "cung điện",
    "url": "https://qipedc.moet.gov.vn/videos/D0182N.mp4"
  },
  {
    "gross": "cung điện",
    "url": "https://qipedc.moet.gov.vn/videos/D0182T.mp4"
  },
  {
    "gross": "dừng lại",
    "url": "https://qipedc.moet.gov.vn/videos/D0183.mp4"
  },
  {
    "gross": "một ít/ một chút",
    "url": "https://qipedc.moet.gov.vn/videos/D0184.mp4"
  },
  {
    "gross": "kẹt xe/tắc đường",
    "url": "https://qipedc.moet.gov.vn/videos/D0185.mp4"
  },
  {
    "gross": "suy ra (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0186.mp4"
  },
  {
    "gross": "thì thầm",
    "url": "https://qipedc.moet.gov.vn/videos/D0187.mp4"
  },
  {
    "gross": "hoặc",
    "url": "https://qipedc.moet.gov.vn/videos/D0188B.mp4"
  },
  {
    "gross": "hoặc",
    "url": "https://qipedc.moet.gov.vn/videos/D0188N.mp4"
  },
  {
    "gross": "hoặc",
    "url": "https://qipedc.moet.gov.vn/videos/D0188T.mp4"
  },
  {
    "gross": "muốn không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0189B.mp4"
  },
  {
    "gross": "muốn không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0189N.mp4"
  },
  {
    "gross": "muốn không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0189T.mp4"
  },
  {
    "gross": "không muốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0190B.mp4"
  },
  {
    "gross": "không muốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0190N.mp4"
  },
  {
    "gross": "không muốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0190T.mp4"
  },
  {
    "gross": "sa mạc",
    "url": "https://qipedc.moet.gov.vn/videos/D0191.mp4"
  },
  {
    "gross": "xem",
    "url": "https://qipedc.moet.gov.vn/videos/D0192B.mp4"
  },
  {
    "gross": "xem",
    "url": "https://qipedc.moet.gov.vn/videos/D0192N.mp4"
  },
  {
    "gross": "xem",
    "url": "https://qipedc.moet.gov.vn/videos/D0192T.mp4"
  },
  {
    "gross": "núi cao",
    "url": "https://qipedc.moet.gov.vn/videos/D0193.mp4"
  },
  {
    "gross": "núi thấp",
    "url": "https://qipedc.moet.gov.vn/videos/D0194.mp4"
  },
  {
    "gross": "đẹp không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0195B.mp4"
  },
  {
    "gross": "đẹp không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0195N.mp4"
  },
  {
    "gross": "đẹp không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0195T.mp4"
  },
  {
    "gross": "xem đã",
    "url": "https://qipedc.moet.gov.vn/videos/D0196.mp4"
  },
  {
    "gross": "mồ hôi nhễ nhại",
    "url": "https://qipedc.moet.gov.vn/videos/D0197.mp4"
  },
  {
    "gross": "không ngon",
    "url": "https://qipedc.moet.gov.vn/videos/D0198.mp4"
  },
  {
    "gross": "hài lòng",
    "url": "https://qipedc.moet.gov.vn/videos/D0199.mp4"
  },
  {
    "gross": "má hồng",
    "url": "https://qipedc.moet.gov.vn/videos/D0200.mp4"
  },
  {
    "gross": "ngập ngừng",
    "url": "https://qipedc.moet.gov.vn/videos/D0201.mp4"
  },
  {
    "gross": "nói ngập ngừng",
    "url": "https://qipedc.moet.gov.vn/videos/D0202.mp4"
  },
  {
    "gross": "Võ Thị Sáu",
    "url": "https://qipedc.moet.gov.vn/videos/D0203.mp4"
  },
  {
    "gross": "mít tinh",
    "url": "https://qipedc.moet.gov.vn/videos/D0204.mp4"
  },
  {
    "gross": "sụp đổ",
    "url": "https://qipedc.moet.gov.vn/videos/D0205.mp4"
  },
  {
    "gross": "thiếu thốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0206B.mp4"
  },
  {
    "gross": "thiếu thốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0206N.mp4"
  },
  {
    "gross": "thiếu thốn",
    "url": "https://qipedc.moet.gov.vn/videos/D0206T.mp4"
  },
  {
    "gross": "xuyên Việt",
    "url": "https://qipedc.moet.gov.vn/videos/D0207.mp4"
  },
  {
    "gross": "khổ công",
    "url": "https://qipedc.moet.gov.vn/videos/D0208.mp4"
  },
  {
    "gross": "dám làm",
    "url": "https://qipedc.moet.gov.vn/videos/D0209B.mp4"
  },
  {
    "gross": "dám làm",
    "url": "https://qipedc.moet.gov.vn/videos/D0209N.mp4"
  },
  {
    "gross": "dám làm",
    "url": "https://qipedc.moet.gov.vn/videos/D0209T.mp4"
  },
  {
    "gross": "không dám",
    "url": "https://qipedc.moet.gov.vn/videos/D0210B.mp4"
  },
  {
    "gross": "không dám",
    "url": "https://qipedc.moet.gov.vn/videos/D0210N.mp4"
  },
  {
    "gross": "không dám",
    "url": "https://qipedc.moet.gov.vn/videos/D0210T.mp4"
  },
  {
    "gross": "phiền hà",
    "url": "https://qipedc.moet.gov.vn/videos/D0211.mp4"
  },
  {
    "gross": "đèn ông sao",
    "url": "https://qipedc.moet.gov.vn/videos/D0212.mp4"
  },
  {
    "gross": "ung thư",
    "url": "https://qipedc.moet.gov.vn/videos/D0213B.mp4"
  },
  {
    "gross": "ung thư",
    "url": "https://qipedc.moet.gov.vn/videos/D0213N.mp4"
  },
  {
    "gross": "ung thư",
    "url": "https://qipedc.moet.gov.vn/videos/D0213T.mp4"
  },
  {
    "gross": "phó hiệu trưởng",
    "url": "https://qipedc.moet.gov.vn/videos/D0214B.mp4"
  },
  {
    "gross": "phó hiệu trưởng",
    "url": "https://qipedc.moet.gov.vn/videos/D0214N.mp4"
  },
  {
    "gross": "phó hiệu trưởng",
    "url": "https://qipedc.moet.gov.vn/videos/D0214T.mp4"
  },
  {
    "gross": "Ô-lim-píc",
    "url": "https://qipedc.moet.gov.vn/videos/D0215.mp4"
  },
  {
    "gross": "vòng nguyệt quế",
    "url": "https://qipedc.moet.gov.vn/videos/D0216.mp4"
  },
  {
    "gross": "hữu nghị",
    "url": "https://qipedc.moet.gov.vn/videos/D0217.mp4"
  },
  {
    "gross": "bắn cung tên",
    "url": "https://qipedc.moet.gov.vn/videos/D0218.mp4"
  },
  {
    "gross": "mũi tên",
    "url": "https://qipedc.moet.gov.vn/videos/D0219.mp4"
  },
  {
    "gross": "cung tên",
    "url": "https://qipedc.moet.gov.vn/videos/D0220.mp4"
  },
  {
    "gross": "tận số",
    "url": "https://qipedc.moet.gov.vn/videos/D0221.mp4"
  },
  {
    "gross": "nứt nẻ (ruộng)",
    "url": "https://qipedc.moet.gov.vn/videos/D0222.mp4"
  },
  {
    "gross": "Mã Lai (nước Ma-lai-xi-a)",
    "url": "https://qipedc.moet.gov.vn/videos/D0223B.mp4"
  },
  {
    "gross": "Mã Lai (nước Ma-lai-xi-a)",
    "url": "https://qipedc.moet.gov.vn/videos/D0223N.mp4"
  },
  {
    "gross": "Mã Lai (nước Ma-lai-xi-a)",
    "url": "https://qipedc.moet.gov.vn/videos/D0223T.mp4"
  },
  {
    "gross": "số La Mã (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0224.mp4"
  },
  {
    "gross": "Long Vương",
    "url": "https://qipedc.moet.gov.vn/videos/D0225.mp4"
  },
  {
    "gross": "đàng hoàng",
    "url": "https://qipedc.moet.gov.vn/videos/D0226.mp4"
  },
  {
    "gross": "phân vân",
    "url": "https://qipedc.moet.gov.vn/videos/D0227.mp4"
  },
  {
    "gross": "lau miệng",
    "url": "https://qipedc.moet.gov.vn/videos/D0228.mp4"
  },
  {
    "gross": "chó cắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0229.mp4"
  },
  {
    "gross": "mèo cào",
    "url": "https://qipedc.moet.gov.vn/videos/D0230.mp4"
  },
  {
    "gross": "quan hệ từ",
    "url": "https://qipedc.moet.gov.vn/videos/D0231.mp4"
  },
  {
    "gross": "yêu nước Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/D0232.mp4"
  },
  {
    "gross": "quan (chức vụ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0233.mp4"
  },
  {
    "gross": "đi tuần",
    "url": "https://qipedc.moet.gov.vn/videos/D0234.mp4"
  },
  {
    "gross": "vỗ về",
    "url": "https://qipedc.moet.gov.vn/videos/D0235.mp4"
  },
  {
    "gross": "hốt hoảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0236.mp4"
  },
  {
    "gross": "chuyện nhỏ",
    "url": "https://qipedc.moet.gov.vn/videos/D0237.mp4"
  },
  {
    "gross": "chuyện lớn",
    "url": "https://qipedc.moet.gov.vn/videos/D0238.mp4"
  },
  {
    "gross": "cái gùi",
    "url": "https://qipedc.moet.gov.vn/videos/D0239.mp4"
  },
  {
    "gross": "hùng vĩ",
    "url": "https://qipedc.moet.gov.vn/videos/D0240.mp4"
  },
  {
    "gross": "bất khuất",
    "url": "https://qipedc.moet.gov.vn/videos/D0241.mp4"
  },
  {
    "gross": "nhưng",
    "url": "https://qipedc.moet.gov.vn/videos/D0242B.mp4"
  },
  {
    "gross": "nhưng",
    "url": "https://qipedc.moet.gov.vn/videos/D0242N.mp4"
  },
  {
    "gross": "nhưng",
    "url": "https://qipedc.moet.gov.vn/videos/D0242T.mp4"
  },
  {
    "gross": "hay là (hoặc là)",
    "url": "https://qipedc.moet.gov.vn/videos/D0243B.mp4"
  },
  {
    "gross": "hay là (hoặc là)",
    "url": "https://qipedc.moet.gov.vn/videos/D0243N.mp4"
  },
  {
    "gross": "hay là (hoặc là)",
    "url": "https://qipedc.moet.gov.vn/videos/D0243T.mp4"
  },
  {
    "gross": "Thăng Long",
    "url": "https://qipedc.moet.gov.vn/videos/D0244.mp4"
  },
  {
    "gross": "dãy núi Hoàng Liên Sơn",
    "url": "https://qipedc.moet.gov.vn/videos/D0245.mp4"
  },
  {
    "gross": "quanh năm",
    "url": "https://qipedc.moet.gov.vn/videos/D0246.mp4"
  },
  {
    "gross": "gấp đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0247.mp4"
  },
  {
    "gross": "gấp ba",
    "url": "https://qipedc.moet.gov.vn/videos/D0248.mp4"
  },
  {
    "gross": "chia đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0249B.mp4"
  },
  {
    "gross": "chia đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0249N.mp4"
  },
  {
    "gross": "chia đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0249T.mp4"
  },
  {
    "gross": "chia ba",
    "url": "https://qipedc.moet.gov.vn/videos/D0250B.mp4"
  },
  {
    "gross": "chia ba",
    "url": "https://qipedc.moet.gov.vn/videos/D0250N.mp4"
  },
  {
    "gross": "chia ba",
    "url": "https://qipedc.moet.gov.vn/videos/D0250T.mp4"
  },
  {
    "gross": "đi lạc (đường, rừng..)",
    "url": "https://qipedc.moet.gov.vn/videos/D0251.mp4"
  },
  {
    "gross": "mất (chết) (chỉ người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0252.mp4"
  },
  {
    "gross": "đại sứ",
    "url": "https://qipedc.moet.gov.vn/videos/D0253.mp4"
  },
  {
    "gross": "cảnh giác",
    "url": "https://qipedc.moet.gov.vn/videos/D0254.mp4"
  },
  {
    "gross": "giám sát",
    "url": "https://qipedc.moet.gov.vn/videos/D0255.mp4"
  },
  {
    "gross": "quan sát",
    "url": "https://qipedc.moet.gov.vn/videos/D0256.mp4"
  },
  {
    "gross": "ăn vụng",
    "url": "https://qipedc.moet.gov.vn/videos/D0257.mp4"
  },
  {
    "gross": "xảy ra",
    "url": "https://qipedc.moet.gov.vn/videos/D0258.mp4"
  },
  {
    "gross": "dự án",
    "url": "https://qipedc.moet.gov.vn/videos/D0259.mp4"
  },
  {
    "gross": "đầu tư",
    "url": "https://qipedc.moet.gov.vn/videos/D0260.mp4"
  },
  {
    "gross": "năn nỉ",
    "url": "https://qipedc.moet.gov.vn/videos/D0261.mp4"
  },
  {
    "gross": "háo hức",
    "url": "https://qipedc.moet.gov.vn/videos/D0262.mp4"
  },
  {
    "gross": "rắc rối",
    "url": "https://qipedc.moet.gov.vn/videos/D0263.mp4"
  },
  {
    "gross": "tải về",
    "url": "https://qipedc.moet.gov.vn/videos/D0264.mp4"
  },
  {
    "gross": "nhõng nhẽo",
    "url": "https://qipedc.moet.gov.vn/videos/D0265.mp4"
  },
  {
    "gross": "hên/gặp may",
    "url": "https://qipedc.moet.gov.vn/videos/D0266.mp4"
  },
  {
    "gross": "đen đủi",
    "url": "https://qipedc.moet.gov.vn/videos/D0267B.mp4"
  },
  {
    "gross": "xui xẻo",
    "url": "https://qipedc.moet.gov.vn/videos/D0268N.mp4"
  },
  {
    "gross": "long lanh (mắt)",
    "url": "https://qipedc.moet.gov.vn/videos/D0269.mp4"
  },
  {
    "gross": "lạnh lùng",
    "url": "https://qipedc.moet.gov.vn/videos/D0270B.mp4"
  },
  {
    "gross": "lạnh lùng",
    "url": "https://qipedc.moet.gov.vn/videos/D0270N.mp4"
  },
  {
    "gross": "lạnh lùng",
    "url": "https://qipedc.moet.gov.vn/videos/D0270T.mp4"
  },
  {
    "gross": "dỗi",
    "url": "https://qipedc.moet.gov.vn/videos/D0271B.mp4"
  },
  {
    "gross": "dỗi",
    "url": "https://qipedc.moet.gov.vn/videos/D0271N.mp4"
  },
  {
    "gross": "dỗi",
    "url": "https://qipedc.moet.gov.vn/videos/D0271T.mp4"
  },
  {
    "gross": "liếc nhìn",
    "url": "https://qipedc.moet.gov.vn/videos/D0272B.mp4"
  },
  {
    "gross": "liếc nhìn",
    "url": "https://qipedc.moet.gov.vn/videos/D0272N.mp4"
  },
  {
    "gross": "liếc nhìn",
    "url": "https://qipedc.moet.gov.vn/videos/D0272T.mp4"
  },
  {
    "gross": "nhổ tóc",
    "url": "https://qipedc.moet.gov.vn/videos/D0273.mp4"
  },
  {
    "gross": "nhổ râu",
    "url": "https://qipedc.moet.gov.vn/videos/D0274.mp4"
  },
  {
    "gross": "nhổ lông mày",
    "url": "https://qipedc.moet.gov.vn/videos/D0275.mp4"
  },
  {
    "gross": "cắt lông mũi",
    "url": "https://qipedc.moet.gov.vn/videos/D0276.mp4"
  },
  {
    "gross": "nhổ răng",
    "url": "https://qipedc.moet.gov.vn/videos/D0277.mp4"
  },
  {
    "gross": "răng hô",
    "url": "https://qipedc.moet.gov.vn/videos/D0278.mp4"
  },
  {
    "gross": "răng khểnh",
    "url": "https://qipedc.moet.gov.vn/videos/D0279.mp4"
  },
  {
    "gross": "kháu khỉnh",
    "url": "https://qipedc.moet.gov.vn/videos/D0280.mp4"
  },
  {
    "gross": "mọc tóc",
    "url": "https://qipedc.moet.gov.vn/videos/D0281.mp4"
  },
  {
    "gross": "mọc râu",
    "url": "https://qipedc.moet.gov.vn/videos/D0282.mp4"
  },
  {
    "gross": "mọc ria mép",
    "url": "https://qipedc.moet.gov.vn/videos/D0283.mp4"
  },
  {
    "gross": "Cô vy (covid)",
    "url": "https://qipedc.moet.gov.vn/videos/D0284.mp4"
  },
  {
    "gross": "Cố đô Huế",
    "url": "https://qipedc.moet.gov.vn/videos/D0285.mp4"
  },
  {
    "gross": "cách ly",
    "url": "https://qipedc.moet.gov.vn/videos/D0286.mp4"
  },
  {
    "gross": "giãn cách xã hội",
    "url": "https://qipedc.moet.gov.vn/videos/D0287.mp4"
  },
  {
    "gross": "tương lai",
    "url": "https://qipedc.moet.gov.vn/videos/D0288.mp4"
  },
  {
    "gross": "ria mép",
    "url": "https://qipedc.moet.gov.vn/videos/D0289.mp4"
  },
  {
    "gross": "trong khoảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0290.mp4"
  },
  {
    "gross": "trốn tìm",
    "url": "https://qipedc.moet.gov.vn/videos/D0291.mp4"
  },
  {
    "gross": "nhảy bao bố",
    "url": "https://qipedc.moet.gov.vn/videos/D0292.mp4"
  },
  {
    "gross": "nhảy lò cò",
    "url": "https://qipedc.moet.gov.vn/videos/D0293.mp4"
  },
  {
    "gross": "kéo co",
    "url": "https://qipedc.moet.gov.vn/videos/D0294.mp4"
  },
  {
    "gross": "hội thoại",
    "url": "https://qipedc.moet.gov.vn/videos/D0295.mp4"
  },
  {
    "gross": "lý do",
    "url": "https://qipedc.moet.gov.vn/videos/D0296.mp4"
  },
  {
    "gross": "lớn hơn 1 (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0297.mp4"
  },
  {
    "gross": "lớn hơn 2 (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0298.mp4"
  },
  {
    "gross": "2 < 5 (Toán học)",
    "url": "https://qipedc.moet.gov.vn/videos/D0299.mp4"
  },
  {
    "gross": "tỉnh táo",
    "url": "https://qipedc.moet.gov.vn/videos/D0300.mp4"
  },
  {
    "gross": "nhộn nhịp (đông người)",
    "url": "https://qipedc.moet.gov.vn/videos/D0301.mp4"
  },
  {
    "gross": "áo kẻ sọc",
    "url": "https://qipedc.moet.gov.vn/videos/D0302.mp4"
  },
  {
    "gross": "đất nước bị chia cắt (Việt Nam)",
    "url": "https://qipedc.moet.gov.vn/videos/D0303.mp4"
  },
  {
    "gross": "thống nhất đất nước",
    "url": "https://qipedc.moet.gov.vn/videos/D0304.mp4"
  },
  {
    "gross": "khoáng sản",
    "url": "https://qipedc.moet.gov.vn/videos/D0305.mp4"
  },
  {
    "gross": "thương mại",
    "url": "https://qipedc.moet.gov.vn/videos/D0306.mp4"
  },
  {
    "gross": "công nghiệp",
    "url": "https://qipedc.moet.gov.vn/videos/D0307B.mp4"
  },
  {
    "gross": "công nghiệp",
    "url": "https://qipedc.moet.gov.vn/videos/D0307N.mp4"
  },
  {
    "gross": "công nghiệp",
    "url": "https://qipedc.moet.gov.vn/videos/D0307T.mp4"
  },
  {
    "gross": "dân tộc Chăm",
    "url": "https://qipedc.moet.gov.vn/videos/D0308.mp4"
  },
  {
    "gross": "dân tộc Mường",
    "url": "https://qipedc.moet.gov.vn/videos/D0309.mp4"
  },
  {
    "gross": "dân tộc Khơ me",
    "url": "https://qipedc.moet.gov.vn/videos/D0310.mp4"
  },
  {
    "gross": "dân tộc Thái",
    "url": "https://qipedc.moet.gov.vn/videos/D0311.mp4"
  },
  {
    "gross": "dân tộc Mông",
    "url": "https://qipedc.moet.gov.vn/videos/D0312.mp4"
  },
  {
    "gross": "nhà rông",
    "url": "https://qipedc.moet.gov.vn/videos/D0313.mp4"
  },
  {
    "gross": "lãng phí",
    "url": "https://qipedc.moet.gov.vn/videos/D0314.mp4"
  },
  {
    "gross": "tiến bộ",
    "url": "https://qipedc.moet.gov.vn/videos/D0315.mp4"
  },
  {
    "gross": "Lượm",
    "url": "https://qipedc.moet.gov.vn/videos/D0316.mp4"
  },
  {
    "gross": "cứu sống",
    "url": "https://qipedc.moet.gov.vn/videos/D0317.mp4"
  },
  {
    "gross": "máy xúc",
    "url": "https://qipedc.moet.gov.vn/videos/D0318.mp4"
  },
  {
    "gross": "cảng Hải Phòng",
    "url": "https://qipedc.moet.gov.vn/videos/D0319.mp4"
  },
  {
    "gross": "cảng Sài Gòn",
    "url": "https://qipedc.moet.gov.vn/videos/D0320.mp4"
  },
  {
    "gross": "kim cương",
    "url": "https://qipedc.moet.gov.vn/videos/D0321.mp4"
  },
  {
    "gross": "phân biệt",
    "url": "https://qipedc.moet.gov.vn/videos/D0322.mp4"
  },
  {
    "gross": "không bình đẳng",
    "url": "https://qipedc.moet.gov.vn/videos/D0323.mp4"
  },
  {
    "gross": "đùm bọc",
    "url": "https://qipedc.moet.gov.vn/videos/D0324.mp4"
  },
  {
    "gross": "khởi nghiệp",
    "url": "https://qipedc.moet.gov.vn/videos/D0325.mp4"
  },
  {
    "gross": "vải lụa",
    "url": "https://qipedc.moet.gov.vn/videos/D0326B.mp4"
  },
  {
    "gross": "vải lụa",
    "url": "https://qipedc.moet.gov.vn/videos/D0326N.mp4"
  },
  {
    "gross": "vải lụa",
    "url": "https://qipedc.moet.gov.vn/videos/D0326T.mp4"
  },
  {
    "gross": "lượt đi",
    "url": "https://qipedc.moet.gov.vn/videos/D0327.mp4"
  },
  {
    "gross": "lượt về (trong thể thao)",
    "url": "https://qipedc.moet.gov.vn/videos/D0328.mp4"
  },
  {
    "gross": "rau diếp cá",
    "url": "https://qipedc.moet.gov.vn/videos/D0329.mp4"
  },
  {
    "gross": "rau ngò/rau mùi",
    "url": "https://qipedc.moet.gov.vn/videos/D0330.mp4"
  },
  {
    "gross": "thao thức",
    "url": "https://qipedc.moet.gov.vn/videos/D0331.mp4"
  },
  {
    "gross": "thâm quầng mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0332.mp4"
  },
  {
    "gross": "tự hào",
    "url": "https://qipedc.moet.gov.vn/videos/D0333.mp4"
  },
  {
    "gross": "quyên góp",
    "url": "https://qipedc.moet.gov.vn/videos/D0334.mp4"
  },
  {
    "gross": "chia rẽ",
    "url": "https://qipedc.moet.gov.vn/videos/D0335.mp4"
  },
  {
    "gross": "tự trọng",
    "url": "https://qipedc.moet.gov.vn/videos/D0336.mp4"
  },
  {
    "gross": "gian dối",
    "url": "https://qipedc.moet.gov.vn/videos/D0337.mp4"
  },
  {
    "gross": "ăn bám",
    "url": "https://qipedc.moet.gov.vn/videos/D0338.mp4"
  },
  {
    "gross": "tuyên truyền",
    "url": "https://qipedc.moet.gov.vn/videos/D0339.mp4"
  },
  {
    "gross": "thịnh vượng",
    "url": "https://qipedc.moet.gov.vn/videos/D0340.mp4"
  },
  {
    "gross": "lấm lem",
    "url": "https://qipedc.moet.gov.vn/videos/D0341.mp4"
  },
  {
    "gross": "ham chơi",
    "url": "https://qipedc.moet.gov.vn/videos/D0342B.mp4"
  },
  {
    "gross": "ham chơi",
    "url": "https://qipedc.moet.gov.vn/videos/D0342N.mp4"
  },
  {
    "gross": "ham chơi",
    "url": "https://qipedc.moet.gov.vn/videos/D0342T.mp4"
  },
  {
    "gross": "đánh cầu lông",
    "url": "https://qipedc.moet.gov.vn/videos/D0343.mp4"
  },
  {
    "gross": "cánh buồm",
    "url": "https://qipedc.moet.gov.vn/videos/D0344.mp4"
  },
  {
    "gross": "cầu Thê Húc (Hồ Gươm)",
    "url": "https://qipedc.moet.gov.vn/videos/D0345.mp4"
  },
  {
    "gross": "da trắng",
    "url": "https://qipedc.moet.gov.vn/videos/D0346B.mp4"
  },
  {
    "gross": "da trắng",
    "url": "https://qipedc.moet.gov.vn/videos/D0346N.mp4"
  },
  {
    "gross": "da trắng",
    "url": "https://qipedc.moet.gov.vn/videos/D0346T.mp4"
  },
  {
    "gross": "da ngăm (nước da ngăm đen)",
    "url": "https://qipedc.moet.gov.vn/videos/D0347B.mp4"
  },
  {
    "gross": "da ngăm (nước da ngăm đen)",
    "url": "https://qipedc.moet.gov.vn/videos/D0347N.mp4"
  },
  {
    "gross": "da ngăm (nước da ngăm đen)",
    "url": "https://qipedc.moet.gov.vn/videos/D0347T.mp4"
  },
  {
    "gross": "tuần trăng mật",
    "url": "https://qipedc.moet.gov.vn/videos/D0348.mp4"
  },
  {
    "gross": "năm tới",
    "url": "https://qipedc.moet.gov.vn/videos/D0349.mp4"
  },
  {
    "gross": "Hoãn",
    "url": "https://qipedc.moet.gov.vn/videos/D0350.mp4"
  },
  {
    "gross": "huỷ",
    "url": "https://qipedc.moet.gov.vn/videos/D0351.mp4"
  },
  {
    "gross": "phụ thuộc",
    "url": "https://qipedc.moet.gov.vn/videos/D0352.mp4"
  },
  {
    "gross": "thuộc địa",
    "url": "https://qipedc.moet.gov.vn/videos/D0353.mp4"
  },
  {
    "gross": "tẩy chay",
    "url": "https://qipedc.moet.gov.vn/videos/D0354.mp4"
  },
  {
    "gross": "đau mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0355.mp4"
  },
  {
    "gross": "đau bụng",
    "url": "https://qipedc.moet.gov.vn/videos/D0356.mp4"
  },
  {
    "gross": "đau tay",
    "url": "https://qipedc.moet.gov.vn/videos/D0357.mp4"
  },
  {
    "gross": "đau chân",
    "url": "https://qipedc.moet.gov.vn/videos/D0358.mp4"
  },
  {
    "gross": "đau tai",
    "url": "https://qipedc.moet.gov.vn/videos/D0359.mp4"
  },
  {
    "gross": "phẫu thuật tay",
    "url": "https://qipedc.moet.gov.vn/videos/D0360.mp4"
  },
  {
    "gross": "phẫu thuật chân",
    "url": "https://qipedc.moet.gov.vn/videos/D0361.mp4"
  },
  {
    "gross": "phẫu thuật mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0362.mp4"
  },
  {
    "gross": "phẫu thuật mũi",
    "url": "https://qipedc.moet.gov.vn/videos/D0363.mp4"
  },
  {
    "gross": "phẫu thuật cổ",
    "url": "https://qipedc.moet.gov.vn/videos/D0364.mp4"
  },
  {
    "gross": "phẫu thuật bụng",
    "url": "https://qipedc.moet.gov.vn/videos/D0365.mp4"
  },
  {
    "gross": "bệnh phong/cùi",
    "url": "https://qipedc.moet.gov.vn/videos/D0366.mp4"
  },
  {
    "gross": "hội chứng Đao - Down",
    "url": "https://qipedc.moet.gov.vn/videos/D0367.mp4"
  },
  {
    "gross": "bệnh Đao - Down",
    "url": "https://qipedc.moet.gov.vn/videos/D03671.mp4"
  },
  {
    "gross": "mệt mỏi",
    "url": "https://qipedc.moet.gov.vn/videos/D0369.mp4"
  },
  {
    "gross": "mệt không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0370.mp4"
  },
  {
    "gross": "đói không?",
    "url": "https://qipedc.moet.gov.vn/videos/D0371.mp4"
  },
  {
    "gross": "cả ngày",
    "url": "https://qipedc.moet.gov.vn/videos/D0372.mp4"
  },
  {
    "gross": "chiên/rán (1)(2)",
    "url": "https://qipedc.moet.gov.vn/videos/D0373.mp4"
  },
  {
    "gross": "nướng",
    "url": "https://qipedc.moet.gov.vn/videos/D0374.mp4"
  },
  {
    "gross": "luộc",
    "url": "https://qipedc.moet.gov.vn/videos/D0375.mp4"
  },
  {
    "gross": "xào",
    "url": "https://qipedc.moet.gov.vn/videos/D0376.mp4"
  },
  {
    "gross": "lẩu",
    "url": "https://qipedc.moet.gov.vn/videos/D0377.mp4"
  },
  {
    "gross": "gỏi/nộm",
    "url": "https://qipedc.moet.gov.vn/videos/D0378.mp4"
  },
  {
    "gross": "nhà kho",
    "url": "https://qipedc.moet.gov.vn/videos/D0379.mp4"
  },
  {
    "gross": "hấp",
    "url": "https://qipedc.moet.gov.vn/videos/D0380.mp4"
  },
  {
    "gross": "thối",
    "url": "https://qipedc.moet.gov.vn/videos/D0381.mp4"
  },
  {
    "gross": "thiu",
    "url": "https://qipedc.moet.gov.vn/videos/D0382.mp4"
  },
  {
    "gross": "nguội",
    "url": "https://qipedc.moet.gov.vn/videos/D0383.mp4"
  },
  {
    "gross": "ngán",
    "url": "https://qipedc.moet.gov.vn/videos/D0384.mp4"
  },
  {
    "gross": "tôm hùm",
    "url": "https://qipedc.moet.gov.vn/videos/D0385.mp4"
  },
  {
    "gross": "cua đồng",
    "url": "https://qipedc.moet.gov.vn/videos/D0386.mp4"
  },
  {
    "gross": "con hàu",
    "url": "https://qipedc.moet.gov.vn/videos/D0387.mp4"
  },
  {
    "gross": "hải sản",
    "url": "https://qipedc.moet.gov.vn/videos/D0388.mp4"
  },
  {
    "gross": "vịt quay",
    "url": "https://qipedc.moet.gov.vn/videos/D0389.mp4"
  },
  {
    "gross": "gà nướng lu",
    "url": "https://qipedc.moet.gov.vn/videos/D0390.mp4"
  },
  {
    "gross": "bánh hamburger",
    "url": "https://qipedc.moet.gov.vn/videos/D0391.mp4"
  },
  {
    "gross": "bánh sandwich",
    "url": "https://qipedc.moet.gov.vn/videos/D0392.mp4"
  },
  {
    "gross": "bánh canh",
    "url": "https://qipedc.moet.gov.vn/videos/D0393.mp4"
  },
  {
    "gross": "miến",
    "url": "https://qipedc.moet.gov.vn/videos/D0394.mp4"
  },
  {
    "gross": "nước ép (cam, cà chua,..)",
    "url": "https://qipedc.moet.gov.vn/videos/D0395.mp4"
  },
  {
    "gross": "nước ép trái cây",
    "url": "https://qipedc.moet.gov.vn/videos/D0396B.mp4"
  },
  {
    "gross": "nước ép trái cây",
    "url": "https://qipedc.moet.gov.vn/videos/D0396N.mp4"
  },
  {
    "gross": "nước ép trái cây",
    "url": "https://qipedc.moet.gov.vn/videos/D0396T.mp4"
  },
  {
    "gross": "sinh tố (bơ, dâu,..)",
    "url": "https://qipedc.moet.gov.vn/videos/D0397.mp4"
  },
  {
    "gross": "vắt chanh",
    "url": "https://qipedc.moet.gov.vn/videos/D0398.mp4"
  },
  {
    "gross": "mía",
    "url": "https://qipedc.moet.gov.vn/videos/D0399.mp4"
  },
  {
    "gross": "chanh đá",
    "url": "https://qipedc.moet.gov.vn/videos/D0400.mp4"
  },
  {
    "gross": "chanh nóng",
    "url": "https://qipedc.moet.gov.vn/videos/D0401.mp4"
  },
  {
    "gross": "chanh muối",
    "url": "https://qipedc.moet.gov.vn/videos/D0402.mp4"
  },
  {
    "gross": "trà đá",
    "url": "https://qipedc.moet.gov.vn/videos/D0403.mp4"
  },
  {
    "gross": "trà nóng",
    "url": "https://qipedc.moet.gov.vn/videos/D0404.mp4"
  },
  {
    "gross": "trà sữa",
    "url": "https://qipedc.moet.gov.vn/videos/D0405.mp4"
  },
  {
    "gross": "Socola",
    "url": "https://qipedc.moet.gov.vn/videos/D0406.mp4"
  },
  {
    "gross": "Cocacola",
    "url": "https://qipedc.moet.gov.vn/videos/D0407.mp4"
  },
  {
    "gross": "7up",
    "url": "https://qipedc.moet.gov.vn/videos/D0408.mp4"
  },
  {
    "gross": "một tiết học",
    "url": "https://qipedc.moet.gov.vn/videos/D0409.mp4"
  },
  {
    "gross": "một tiếng",
    "url": "https://qipedc.moet.gov.vn/videos/D0410B.mp4"
  },
  {
    "gross": "một tiếng",
    "url": "https://qipedc.moet.gov.vn/videos/D0410N.mp4"
  },
  {
    "gross": "một tiếng",
    "url": "https://qipedc.moet.gov.vn/videos/D0410T.mp4"
  },
  {
    "gross": "chung tay",
    "url": "https://qipedc.moet.gov.vn/videos/D0411.mp4"
  },
  {
    "gross": "rửa chân",
    "url": "https://qipedc.moet.gov.vn/videos/D0412.mp4"
  },
  {
    "gross": "rửa mặt",
    "url": "https://qipedc.moet.gov.vn/videos/D0413.mp4"
  },
  {
    "gross": "đánh răng",
    "url": "https://qipedc.moet.gov.vn/videos/D0414.mp4"
  },
  {
    "gross": "tuần này",
    "url": "https://qipedc.moet.gov.vn/videos/D0416B.mp4"
  },
  {
    "gross": "tuần này",
    "url": "https://qipedc.moet.gov.vn/videos/D0416N.mp4"
  },
  {
    "gross": "tuần này",
    "url": "https://qipedc.moet.gov.vn/videos/D0416T.mp4"
  },
  {
    "gross": "tuần sau",
    "url": "https://qipedc.moet.gov.vn/videos/D0417B.mp4"
  },
  {
    "gross": "tuần sau",
    "url": "https://qipedc.moet.gov.vn/videos/D0417N.mp4"
  },
  {
    "gross": "tuần sau",
    "url": "https://qipedc.moet.gov.vn/videos/D0417T.mp4"
  },
  {
    "gross": "tuần trước",
    "url": "https://qipedc.moet.gov.vn/videos/D0418B.mp4"
  },
  {
    "gross": "tuần trước",
    "url": "https://qipedc.moet.gov.vn/videos/D0418N.mp4"
  },
  {
    "gross": "tuần trước",
    "url": "https://qipedc.moet.gov.vn/videos/D0418T.mp4"
  },
  {
    "gross": "cuối tuần",
    "url": "https://qipedc.moet.gov.vn/videos/D0419.mp4"
  },
  {
    "gross": "cuối tháng",
    "url": "https://qipedc.moet.gov.vn/videos/D0420.mp4"
  },
  {
    "gross": "cuối năm",
    "url": "https://qipedc.moet.gov.vn/videos/D0421.mp4"
  },
  {
    "gross": "mục tiêu",
    "url": "https://qipedc.moet.gov.vn/videos/D0422.mp4"
  },
  {
    "gross": "sinh đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0423B.mp4"
  },
  {
    "gross": "sinh đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0423N.mp4"
  },
  {
    "gross": "sinh đôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0423T.mp4"
  },
  {
    "gross": "đôi/cặp",
    "url": "https://qipedc.moet.gov.vn/videos/D0424.mp4"
  },
  {
    "gross": "Đảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0425.mp4"
  },
  {
    "gross": "mô tả",
    "url": "https://qipedc.moet.gov.vn/videos/D0426.mp4"
  },
  {
    "gross": "mũm mĩm",
    "url": "https://qipedc.moet.gov.vn/videos/D0427.mp4"
  },
  {
    "gross": "tóc dài",
    "url": "https://qipedc.moet.gov.vn/videos/D0428.mp4"
  },
  {
    "gross": "tóc ngắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0429B.mp4"
  },
  {
    "gross": "tóc ngắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0429N.mp4"
  },
  {
    "gross": "tóc ngắn",
    "url": "https://qipedc.moet.gov.vn/videos/D0429T.mp4"
  },
  {
    "gross": "tổng kết/bế giảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0430B.mp4"
  },
  {
    "gross": "tổng kết/bế giảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0430N.mp4"
  },
  {
    "gross": "tổng kết/bế giảng",
    "url": "https://qipedc.moet.gov.vn/videos/D0430T.mp4"
  },
  {
    "gross": "lốc xoáy",
    "url": "https://qipedc.moet.gov.vn/videos/D0431.mp4"
  },
  {
    "gross": "tay chân sạch sẽ",
    "url": "https://qipedc.moet.gov.vn/videos/D0432B.mp4"
  },
  {
    "gross": "tay chân sạch sẽ",
    "url": "https://qipedc.moet.gov.vn/videos/D0432N.mp4"
  },
  {
    "gross": "tay chân sạch sẽ",
    "url": "https://qipedc.moet.gov.vn/videos/D0432T.mp4"
  },
  {
    "gross": "nhắm mắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0433.mp4"
  },
  {
    "gross": "sờ",
    "url": "https://qipedc.moet.gov.vn/videos/D0434.mp4"
  },
  {
    "gross": "cây nến",
    "url": "https://qipedc.moet.gov.vn/videos/D0435.mp4"
  },
  {
    "gross": "dịu dàng",
    "url": "https://qipedc.moet.gov.vn/videos/D0436.mp4"
  },
  {
    "gross": "đùa",
    "url": "https://qipedc.moet.gov.vn/videos/D0437B.mp4"
  },
  {
    "gross": "đùa",
    "url": "https://qipedc.moet.gov.vn/videos/D0437N.mp4"
  },
  {
    "gross": "đùa",
    "url": "https://qipedc.moet.gov.vn/videos/D0437T.mp4"
  },
  {
    "gross": "làm được",
    "url": "https://qipedc.moet.gov.vn/videos/D0438.mp4"
  },
  {
    "gross": "dòng sông chảy",
    "url": "https://qipedc.moet.gov.vn/videos/D0439.mp4"
  },
  {
    "gross": "ăn đủ",
    "url": "https://qipedc.moet.gov.vn/videos/D0440.mp4"
  },
  {
    "gross": "ăn vừa",
    "url": "https://qipedc.moet.gov.vn/videos/D0441.mp4"
  },
  {
    "gross": "ăn ít",
    "url": "https://qipedc.moet.gov.vn/videos/D0442.mp4"
  },
  {
    "gross": "đồ uống",
    "url": "https://qipedc.moet.gov.vn/videos/D0443.mp4"
  },
  {
    "gross": "đồ ăn",
    "url": "https://qipedc.moet.gov.vn/videos/D0444.mp4"
  },
  {
    "gross": "trang điểm",
    "url": "https://qipedc.moet.gov.vn/videos/D0445.mp4"
  },
  {
    "gross": "đau mắt đỏ",
    "url": "https://qipedc.moet.gov.vn/videos/D0446.mp4"
  },
  {
    "gross": "cái vợt cá",
    "url": "https://qipedc.moet.gov.vn/videos/D0447.mp4"
  },
  {
    "gross": "vợt cầu lông",
    "url": "https://qipedc.moet.gov.vn/videos/D0448.mp4"
  },
  {
    "gross": "con vượn",
    "url": "https://qipedc.moet.gov.vn/videos/D0449.mp4"
  },
  {
    "gross": "thắp đèn",
    "url": "https://qipedc.moet.gov.vn/videos/D0450.mp4"
  },
  {
    "gross": "góp tiền",
    "url": "https://qipedc.moet.gov.vn/videos/D0451.mp4"
  },
  {
    "gross": "họp nhóm",
    "url": "https://qipedc.moet.gov.vn/videos/D0452B.mp4"
  },
  {
    "gross": "họp nhóm",
    "url": "https://qipedc.moet.gov.vn/videos/D0452N.mp4"
  },
  {
    "gross": "họp nhóm",
    "url": "https://qipedc.moet.gov.vn/videos/D0452T.mp4"
  },
  {
    "gross": "nhút nhát",
    "url": "https://qipedc.moet.gov.vn/videos/D0453.mp4"
  },
  {
    "gross": "luộc rau",
    "url": "https://qipedc.moet.gov.vn/videos/D0455.mp4"
  },
  {
    "gross": "muối",
    "url": "https://qipedc.moet.gov.vn/videos/D0456.mp4"
  },
  {
    "gross": "nước mắm",
    "url": "https://qipedc.moet.gov.vn/videos/D0457.mp4"
  },
  {
    "gross": "thoăn thoắt",
    "url": "https://qipedc.moet.gov.vn/videos/D0458.mp4"
  },
  {
    "gross": "nghênh nghênh (đầu)",
    "url": "https://qipedc.moet.gov.vn/videos/D0459.mp4"
  },
  {
    "gross": "đua đòi",
    "url": "https://qipedc.moet.gov.vn/videos/D0460.mp4"
  },
  {
    "gross": "bình sữa (em bé)",
    "url": "https://qipedc.moet.gov.vn/videos/D0461.mp4"
  },
  {
    "gross": "đòi",
    "url": "https://qipedc.moet.gov.vn/videos/D0462.mp4"
  },
  {
    "gross": "đòi hỏi",
    "url": "https://qipedc.moet.gov.vn/videos/D0463.mp4"
  },
  {
    "gross": "trẻ con/con nít",
    "url": "https://qipedc.moet.gov.vn/videos/D0464B.mp4"
  },
  {
    "gross": "trẻ con/con nít",
    "url": "https://qipedc.moet.gov.vn/videos/D0464N.mp4"
  },
  {
    "gross": "trẻ con/con nít",
    "url": "https://qipedc.moet.gov.vn/videos/D0464T.mp4"
  },
  {
    "gross": "duy nhất",
    "url": "https://qipedc.moet.gov.vn/videos/D0465.mp4"
  },
  {
    "gross": "cạnh tranh",
    "url": "https://qipedc.moet.gov.vn/videos/D0466.mp4"
  },
  {
    "gross": "hoa hậu",
    "url": "https://qipedc.moet.gov.vn/videos/D0467.mp4"
  },
  {
    "gross": "cái neo",
    "url": "https://qipedc.moet.gov.vn/videos/D0468.mp4"
  },
  {
    "gross": "phóng viên",
    "url": "https://qipedc.moet.gov.vn/videos/D0469.mp4"
  },
  {
    "gross": "nhà văn hóa",
    "url": "https://qipedc.moet.gov.vn/videos/D0470B.mp4"
  },
  {
    "gross": "nhà văn hóa",
    "url": "https://qipedc.moet.gov.vn/videos/D0470N.mp4"
  },
  {
    "gross": "nhà văn hóa",
    "url": "https://qipedc.moet.gov.vn/videos/D0470T.mp4"
  },
  {
    "gross": "chùa Yên Tử",
    "url": "https://qipedc.moet.gov.vn/videos/D0471.mp4"
  },
  {
    "gross": "chõ xôi",
    "url": "https://qipedc.moet.gov.vn/videos/D0472.mp4"
  },
  {
    "gross": "cây cọ",
    "url": "https://qipedc.moet.gov.vn/videos/D0473.mp4"
  },
  {
    "gross": "khu vực cách ly",
    "url": "https://qipedc.moet.gov.vn/videos/D0474.mp4"
  },
  {
    "gross": "phong toả",
    "url": "https://qipedc.moet.gov.vn/videos/D0475.mp4"
  },
  {
    "gross": "thung lũng",
    "url": "https://qipedc.moet.gov.vn/videos/D0477.mp4"
  },
  {
    "gross": "địa hình",
    "url": "https://qipedc.moet.gov.vn/videos/D0478.mp4"
  },
  {
    "gross": "Kim Đồng",
    "url": "https://qipedc.moet.gov.vn/videos/D0479.mp4"
  },
  {
    "gross": "Thánh Gióng",
    "url": "https://qipedc.moet.gov.vn/videos/D0480.mp4"
  },
  {
    "gross": "hoa giấy",
    "url": "https://qipedc.moet.gov.vn/videos/D0481.mp4"
  },
  {
    "gross": "hoa dâm bụt",
    "url": "https://qipedc.moet.gov.vn/videos/D0482.mp4"
  },
  {
    "gross": "kết luận",
    "url": "https://qipedc.moet.gov.vn/videos/D0483.mp4"
  },
  {
    "gross": "internet",
    "url": "https://qipedc.moet.gov.vn/videos/D0484.mp4"
  },
  {
    "gross": "nhà vệ sinh",
    "url": "https://qipedc.moet.gov.vn/videos/D0485.mp4"
  },
  {
    "gross": "đi vệ sinh",
    "url": "https://qipedc.moet.gov.vn/videos/D0486.mp4"
  },
  {
    "gross": "hoa mai",
    "url": "https://qipedc.moet.gov.vn/videos/D0488.mp4"
  },
  {
    "gross": "a",
    "url": "https://qipedc.moet.gov.vn/videos/D0489.mp4"
  },
  {
    "gross": "ă",
    "url": "https://qipedc.moet.gov.vn/videos/D0490B.mp4"
  },
  {
    "gross": "ă",
    "url": "https://qipedc.moet.gov.vn/videos/D0490N.mp4"
  },
  {
    "gross": "ă",
    "url": "https://qipedc.moet.gov.vn/videos/D0490T.mp4"
  },
  {
    "gross": "â",
    "url": "https://qipedc.moet.gov.vn/videos/D0491B.mp4"
  },
  {
    "gross": "â",
    "url": "https://qipedc.moet.gov.vn/videos/D0491N.mp4"
  },
  {
    "gross": "â",
    "url": "https://qipedc.moet.gov.vn/videos/D0491T.mp4"
  },
  {
    "gross": "b",
    "url": "https://qipedc.moet.gov.vn/videos/D0492.mp4"
  },
  {
    "gross": "c",
    "url": "https://qipedc.moet.gov.vn/videos/D0493.mp4"
  },
  {
    "gross": "d",
    "url": "https://qipedc.moet.gov.vn/videos/D0494.mp4"
  },
  {
    "gross": "đ",
    "url": "https://qipedc.moet.gov.vn/videos/D0495.mp4"
  },
  {
    "gross": "e",
    "url": "https://qipedc.moet.gov.vn/videos/D0496.mp4"
  },
  {
    "gross": "ê",
    "url": "https://qipedc.moet.gov.vn/videos/D0497B.mp4"
  },
  {
    "gross": "ê",
    "url": "https://qipedc.moet.gov.vn/videos/D0497N.mp4"
  },
  {
    "gross": "ê",
    "url": "https://qipedc.moet.gov.vn/videos/D0497T.mp4"
  },
  {
    "gross": "g",
    "url": "https://qipedc.moet.gov.vn/videos/D0498B.mp4"
  },
  {
    "gross": "g",
    "url": "https://qipedc.moet.gov.vn/videos/D0498N.mp4"
  },
  {
    "gross": "h",
    "url": "https://qipedc.moet.gov.vn/videos/D0500B.mp4"
  },
  {
    "gross": "h",
    "url": "https://qipedc.moet.gov.vn/videos/D0500N.mp4"
  },
  {
    "gross": "h",
    "url": "https://qipedc.moet.gov.vn/videos/D0500T.mp4"
  },
  {
    "gross": "i",
    "url": "https://qipedc.moet.gov.vn/videos/D0501.mp4"
  },
  {
    "gross": "k",
    "url": "https://qipedc.moet.gov.vn/videos/D0502.mp4"
  },
  {
    "gross": "l",
    "url": "https://qipedc.moet.gov.vn/videos/D0503.mp4"
  },
  {
    "gross": "m",
    "url": "https://qipedc.moet.gov.vn/videos/D0504.mp4"
  },
  {
    "gross": "n",
    "url": "https://qipedc.moet.gov.vn/videos/D0505.mp4"
  },
  {
    "gross": "o",
    "url": "https://qipedc.moet.gov.vn/videos/D0506.mp4"
  },
  {
    "gross": "ô",
    "url": "https://qipedc.moet.gov.vn/videos/D0507B.mp4"
  },
  {
    "gross": "ô",
    "url": "https://qipedc.moet.gov.vn/videos/D0507N.mp4"
  },
  {
    "gross": "ô",
    "url": "https://qipedc.moet.gov.vn/videos/D0507T.mp4"
  },
  {
    "gross": "ơ",
    "url": "https://qipedc.moet.gov.vn/videos/D0508N.mp4"
  },
  {
    "gross": "p",
    "url": "https://qipedc.moet.gov.vn/videos/D0509B.mp4"
  },
  {
    "gross": "p",
    "url": "https://qipedc.moet.gov.vn/videos/D0509N.mp4"
  },
  {
    "gross": "p",
    "url": "https://qipedc.moet.gov.vn/videos/D0509T.mp4"
  },
  {
    "gross": "q",
    "url": "https://qipedc.moet.gov.vn/videos/D0510.mp4"
  },
  {
    "gross": "r",
    "url": "https://qipedc.moet.gov.vn/videos/D0511.mp4"
  },
  {
    "gross": "s",
    "url": "https://qipedc.moet.gov.vn/videos/D0512.mp4"
  },
  {
    "gross": "t",
    "url": "https://qipedc.moet.gov.vn/videos/D0513B.mp4"
  },
  {
    "gross": "t",
    "url": "https://qipedc.moet.gov.vn/videos/D0513N.mp4"
  },
  {
    "gross": "t",
    "url": "https://qipedc.moet.gov.vn/videos/D0513T.mp4"
  },
  {
    "gross": "u",
    "url": "https://qipedc.moet.gov.vn/videos/D0514.mp4"
  },
  {
    "gross": "ư",
    "url": "https://qipedc.moet.gov.vn/videos/D0515N.mp4"
  },
  {
    "gross": "v",
    "url": "https://qipedc.moet.gov.vn/videos/D0516.mp4"
  },
  {
    "gross": "x",
    "url": "https://qipedc.moet.gov.vn/videos/D0517B.mp4"
  },
  {
    "gross": "x",
    "url": "https://qipedc.moet.gov.vn/videos/D0517N.mp4"
  },
  {
    "gross": "x",
    "url": "https://qipedc.moet.gov.vn/videos/D0517T.mp4"
  },
  {
    "gross": "y",
    "url": "https://qipedc.moet.gov.vn/videos/D0518N.mp4"
  },
  {
    "gross": "z",
    "url": "https://qipedc.moet.gov.vn/videos/D0519.mp4"
  },
  {
    "gross": "f",
    "url": "https://qipedc.moet.gov.vn/videos/D0521.mp4"
  },
  {
    "gross": "j",
    "url": "https://qipedc.moet.gov.vn/videos/D0522.mp4"
  },
  {
    "gross": "w",
    "url": "https://qipedc.moet.gov.vn/videos/D0523.mp4"
  },
  {
    "gross": "dấu huyền",
    "url": "https://qipedc.moet.gov.vn/videos/D0524B.mp4"
  },
  {
    "gross": "dấu huyền",
    "url": "https://qipedc.moet.gov.vn/videos/D0524N.mp4"
  },
  {
    "gross": "dấu huyền",
    "url": "https://qipedc.moet.gov.vn/videos/D0524T.mp4"
  },
  {
    "gross": "dấu sắc",
    "url": "https://qipedc.moet.gov.vn/videos/D0525B.mp4"
  },
  {
    "gross": "dấu sắc",
    "url": "https://qipedc.moet.gov.vn/videos/D0525N.mp4"
  },
  {
    "gross": "dấu sắc",
    "url": "https://qipedc.moet.gov.vn/videos/D0525T.mp4"
  },
  {
    "gross": "dấu hỏi",
    "url": "https://qipedc.moet.gov.vn/videos/D0526B.mp4"
  },
  {
    "gross": "dấu hỏi",
    "url": "https://qipedc.moet.gov.vn/videos/D0526N.mp4"
  },
  {
    "gross": "dấu hỏi",
    "url": "https://qipedc.moet.gov.vn/videos/D0526T.mp4"
  },
  {
    "gross": "dấu ngã",
    "url": "https://qipedc.moet.gov.vn/videos/D0527B.mp4"
  },
  {
    "gross": "dấu ngã",
    "url": "https://qipedc.moet.gov.vn/videos/D0527N.mp4"
  },
  {
    "gross": "dấu ngã",
    "url": "https://qipedc.moet.gov.vn/videos/D0527T.mp4"
  },
  {
    "gross": "dấu nặng",
    "url": "https://qipedc.moet.gov.vn/videos/D0528.mp4"
  },
  {
    "gross": "0 (số không)",
    "url": "https://qipedc.moet.gov.vn/videos/D0529.mp4"
  },
  {
    "gross": "1",
    "url": "https://qipedc.moet.gov.vn/videos/D0530.mp4"
  },
  {
    "gross": "2",
    "url": "https://qipedc.moet.gov.vn/videos/D0531.mp4"
  },
  {
    "gross": "3",
    "url": "https://qipedc.moet.gov.vn/videos/D0532.mp4"
  },
  {
    "gross": "4",
    "url": "https://qipedc.moet.gov.vn/videos/D0533.mp4"
  },
  {
    "gross": "5",
    "url": "https://qipedc.moet.gov.vn/videos/D0534.mp4"
  },
  {
    "gross": "6",
    "url": "https://qipedc.moet.gov.vn/videos/D0535B.mp4"
  },
  {
    "gross": "6",
    "url": "https://qipedc.moet.gov.vn/videos/D0535N.mp4"
  },
  {
    "gross": "6",
    "url": "https://qipedc.moet.gov.vn/videos/D0535T.mp4"
  },
  {
    "gross": "7",
    "url": "https://qipedc.moet.gov.vn/videos/D0536.mp4"
  },
  {
    "gross": "8",
    "url": "https://qipedc.moet.gov.vn/videos/D0537.mp4"
  },
  {
    "gross": "9",
    "url": "https://qipedc.moet.gov.vn/videos/D0538.mp4"
  },
  {
    "gross": "10",
    "url": "https://qipedc.moet.gov.vn/videos/D0539.mp4"
  },
  {
    "gross": "11",
    "url": "https://qipedc.moet.gov.vn/videos/D0540B.mp4"
  },
  {
    "gross": "11",
    "url": "https://qipedc.moet.gov.vn/videos/D0540N.mp4"
  },
  {
    "gross": "11",
    "url": "https://qipedc.moet.gov.vn/videos/D0540T.mp4"
  },
  {
    "gross": "12",
    "url": "https://qipedc.moet.gov.vn/videos/D0541B.mp4"
  },
  {
    "gross": "12",
    "url": "https://qipedc.moet.gov.vn/videos/D0541N.mp4"
  },
  {
    "gross": "12",
    "url": "https://qipedc.moet.gov.vn/videos/D0541T.mp4"
  },
  {
    "gross": "23",
    "url": "https://qipedc.moet.gov.vn/videos/D0542B.mp4"
  },
  {
    "gross": "23",
    "url": "https://qipedc.moet.gov.vn/videos/D0542N.mp4"
  },
  {
    "gross": "23",
    "url": "https://qipedc.moet.gov.vn/videos/D0542T.mp4"
  },
  {
    "gross": "33",
    "url": "https://qipedc.moet.gov.vn/videos/D0543N.mp4"
  },
  {
    "gross": "33",
    "url": "https://qipedc.moet.gov.vn/videos/D0543T.mp4"
  },
  {
    "gross": "40",
    "url": "https://qipedc.moet.gov.vn/videos/D0544.mp4"
  },
  {
    "gross": "80",
    "url": "https://qipedc.moet.gov.vn/videos/D0545.mp4"
  },
  {
    "gross": "90",
    "url": "https://qipedc.moet.gov.vn/videos/D0546N.mp4"
  },
  {
    "gross": "100",
    "url": "https://qipedc.moet.gov.vn/videos/D0547.mp4"
  },
  {
    "gross": "1000 (một nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0548N.mp4"
  },
  {
    "gross": "5000 (năm nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0549B.mp4"
  },
  {
    "gross": "5000 (năm nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0549T.mp4"
  },
  {
    "gross": "10 000 (mười nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0550B.mp4"
  },
  {
    "gross": "10 000 (mười nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0550N.mp4"
  },
  {
    "gross": "10 000 (mười nghìn)",
    "url": "https://qipedc.moet.gov.vn/videos/D0550T.mp4"
  },
  {
    "gross": "1 000 000 (một triệu)",
    "url": "https://qipedc.moet.gov.vn/videos/D0551B.mp4"
  },
  {
    "gross": "1 000 000 (một triệu)",
    "url": "https://qipedc.moet.gov.vn/videos/D0551N.mp4"
  },
  {
    "gross": "1 000 000 (một triệu)",
    "url": "https://qipedc.moet.gov.vn/videos/D0551T.mp4"
  },
  {
    "gross": "1 000 000 000 (một tỉ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0552B.mp4"
  },
  {
    "gross": "1 000 000 000 (một tỉ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0552N.mp4"
  },
  {
    "gross": "1 000 000 000 (một tỉ)",
    "url": "https://qipedc.moet.gov.vn/videos/D0552T.mp4"
  },
  {
    "gross": "ăn cóc",
    "url": "https://qipedc.moet.gov.vn/videos/D0600.mp4"
  },
  {
    "gross": "ác",
    "url": "https://qipedc.moet.gov.vn/videos/W00000.mp4"
  },
  {
    "gross": "ác cảm",
    "url": "https://qipedc.moet.gov.vn/videos/W00001.mp4"
  },
  {
    "gross": "ác độc",
    "url": "https://qipedc.moet.gov.vn/videos/W00002.mp4"
  },
  {
    "gross": "ác mộng",
    "url": "https://qipedc.moet.gov.vn/videos/W00003.mp4"
  },
  {
    "gross": "ai",
    "url": "https://qipedc.moet.gov.vn/videos/W00004B.mp4"
  },
  {
    "gross": "ai",
    "url": "https://qipedc.moet.gov.vn/videos/W00004N.mp4"
  },
  {
    "gross": "ai",
    "url": "https://qipedc.moet.gov.vn/videos/W00004T.mp4"
  },
  {
    "gross": "An Giang",
    "url": "https://qipedc.moet.gov.vn/videos/W00006.mp4"
  },
  {
    "gross": "an ninh",
    "url": "https://qipedc.moet.gov.vn/videos/W00007.mp4"
  },
  {
    "gross": "Anh (nước Anh)",
    "url": "https://qipedc.moet.gov.vn/videos/W00009B.mp4"
  },
  {
    "gross": "Anh (nước Anh)",
    "url": "https://qipedc.moet.gov.vn/videos/W00009N.mp4"
  },
  {
    "gross": "Anh (nước Anh)",
    "url": "https://qipedc.moet.gov.vn/videos/W00009T.mp4"
  },
  {
    "gross": "anh chị",
    "url": "https://qipedc.moet.gov.vn/videos/W00010B.mp4"
  },
  {
    "gross": "anh chị em",
    "url": "https://qipedc.moet.gov.vn/videos/W00011.mp4"
  },
  {
    "gross": "anh dũng",
    "url": "https://qipedc.moet.gov.vn/videos/W00012B.mp4"
  },
  {
    "gross": "anh dũng",
    "url": "https://qipedc.moet.gov.vn/videos/W00012N.mp4"
  },
  {
    "gross": "anh dũng",
    "url": "https://qipedc.moet.gov.vn/videos/W00012T.mp4"
  },
  {
    "gross": "anh em",
    "url": "https://qipedc.moet.gov.vn/videos/W00013B.mp4"
  },
  {
    "gross": "anh em",
    "url": "https://qipedc.moet.gov.vn/videos/W00013N.mp4"
  },
  {
    "gross": "anh em",
    "url": "https://qipedc.moet.gov.vn/videos/W00013T.mp4"
  },
  {
    "gross": "anh họ",
    "url": "https://qipedc.moet.gov.vn/videos/W00014N.mp4"
  },
  {
    "gross": "anh họ",
    "url": "https://qipedc.moet.gov.vn/videos/W00014T.mp4"
  },
  {
    "gross": "anh hùng",
    "url": "https://qipedc.moet.gov.vn/videos/W00015.mp4"
  },
  {
    "gross": "anh rể",
    "url": "https://qipedc.moet.gov.vn/videos/W00018B.mp4"
  },
  {
    "gross": "anh rể",
    "url": "https://qipedc.moet.gov.vn/videos/W00018N.mp4"
  },
  {
    "gross": "anh rể",
    "url": "https://qipedc.moet.gov.vn/videos/W00018T.mp4"
  },
  {
    "gross": "anh ruột",
    "url": "https://qipedc.moet.gov.vn/videos/W00019B.mp4"
  },
  {
    "gross": "anh ruột",
    "url": "https://qipedc.moet.gov.vn/videos/W00019N.mp4"
  },
  {
    "gross": "anh ruột",
    "url": "https://qipedc.moet.gov.vn/videos/W00019T.mp4"
  },
  {
    "gross": "anh vợ",
    "url": "https://qipedc.moet.gov.vn/videos/W00020.mp4"
  },
  {
    "gross": "sáng",
    "url": "https://qipedc.moet.gov.vn/videos/W00024.mp4"
  },
  {
    "gross": "ao chuôm",
    "url": "https://qipedc.moet.gov.vn/videos/W00026.mp4"
  },
  {
    "gross": "ảo thuật",
    "url": "https://qipedc.moet.gov.vn/videos/W00027.mp4"
  },
  {
    "gross": "áo",
    "url": "https://qipedc.moet.gov.vn/videos/W00028.mp4"
  },
  {
    "gross": "áo ấm",
    "url": "https://qipedc.moet.gov.vn/videos/W00029.mp4"
  },
  {
    "gross": "áo cánh",
    "url": "https://qipedc.moet.gov.vn/videos/W00030.mp4"
  },
  {
    "gross": "áo đồng phục",
    "url": "https://qipedc.moet.gov.vn/videos/W00032B.mp4"
  },
  {
    "gross": "áo đồng phục",
    "url": "https://qipedc.moet.gov.vn/videos/W00032N.mp4"
  },
  {
    "gross": "áo đồng phục",
    "url": "https://qipedc.moet.gov.vn/videos/W00032T.mp4"
  },
  {
    "gross": "áo len",
    "url": "https://qipedc.moet.gov.vn/videos/W00033.mp4"
  },
  {
    "gross": "áo phao",
    "url": "https://qipedc.moet.gov.vn/videos/W00034.mp4"
  },
  {
    "gross": "áo phông",
    "url": "https://qipedc.moet.gov.vn/videos/W00035B.mp4"
  },
  {
    "gross": "áo phông",
    "url": "https://qipedc.moet.gov.vn/videos/W00035N.mp4"
  },
  {
    "gross": "áo phông",
    "url": "https://qipedc.moet.gov.vn/videos/W00035T.mp4"
  },
  {
    "gross": "áp phích",
    "url": "https://qipedc.moet.gov.vn/videos/W00036.mp4"
  },
  {
    "gross": "ăn diện",
    "url": "https://qipedc.moet.gov.vn/videos/W00039.mp4"
  },
  {
    "gross": "ăn hối lộ",
    "url": "https://qipedc.moet.gov.vn/videos/W00040.mp4"
  },
  {
    "gross": "ăn uống",
    "url": "https://qipedc.moet.gov.vn/videos/W00042.mp4"
  },
  {
    "gross": "ăn vặt",
    "url": "https://qipedc.moet.gov.vn/videos/W00043.mp4"
  },
  {
    "gross": "ăn xin",
    "url": "https://qipedc.moet.gov.vn/videos/W00044.mp4"
  },
  {
    "gross": "âm thanh",
    "url": "https://qipedc.moet.gov.vn/videos/W00045.mp4"
  },
  {
    "gross": "ầm ĩ",
    "url": "https://qipedc.moet.gov.vn/videos/W00048.mp4"
  },
  {
    "gross": "ẩm mốc",
    "url": "https://qipedc.moet.gov.vn/videos/W00049.mp4"
  },
  {
    "gross": "ẩm ướt",
    "url": "https://qipedc.moet.gov.vn/videos/W00050.mp4"
  },
  {
    "gross": "ấm áp",
    "url": "https://qipedc.moet.gov.vn/videos/W00051.mp4"
  },
  {
    "gross": "ấm đun nước",
    "url": "https://qipedc.moet.gov.vn/videos/W00052.mp4"
  },
  {
    "gross": "ấm no",
    "url": "https://qipedc.moet.gov.vn/videos/W00053.mp4"
  },
  {
    "gross": "ấm trà",
    "url": "https://qipedc.moet.gov.vn/videos/W00055.mp4"
  },
  {
    "gross": "ân hận",
    "url": "https://qipedc.moet.gov.vn/videos/W00057B.mp4"
  },
  {
    "gross": "ân hận",
    "url": "https://qipedc.moet.gov.vn/videos/W00057N.mp4"
  },
  {
    "gross": "ân hận",
    "url": "https://qipedc.moet.gov.vn/videos/W00057T.mp4"
  },
  {
    "gross": "ấn",
    "url": "https://qipedc.moet.gov.vn/videos/W00059.mp4"
  },
  {
    "gross": "ấn tượng",
    "url": "https://qipedc.moet.gov.vn/videos/W00061.mp4"
  },
  {
    "gross": "Âu Cơ",
    "url": "https://qipedc.moet.gov.vn/videos/W00062.mp4"
  },
  {
    "gross": "Ba chân bốn cẳng",
    "url": "https://qipedc.moet.gov.vn/videos/W00065.mp4"
  },
  {
    "gross": "Bà Nà",
    "url": "https://qipedc.moet.gov.vn/videos/W00067.mp4"
  },
  {
    "gross": "Bà Rịa - Vũng Tàu",
    "url": "https://qipedc.moet.gov.vn/videos/W00068.mp4"
  },
  {
    "gross": "triệu phú",
    "url": "https://qipedc.moet.gov.vn/videos/W00069.mp4"
  },
  {
    "gross": "Bạc Liêu",
    "url": "https://qipedc.moet.gov.vn/videos/W00070.mp4"
  },
  {
    "gross": "bài báo",
    "url": "https://qipedc.moet.gov.vn/videos/W00071.mp4"
  },
  {
    "gross": "bài thơ",
    "url": "https://qipedc.moet.gov.vn/videos/W00075B.mp4"
  },
  {
    "gross": "bài thơ",
    "url": "https://qipedc.moet.gov.vn/videos/W00075N.mp4"
  },
  {
    "gross": "bài thơ",
    "url": "https://qipedc.moet.gov.vn/videos/W00075T.mp4"
  },
  {
    "gross": "hệ bài tiết",
    "url": "https://qipedc.moet.gov.vn/videos/W00076.mp4"
  },
  {
    "gross": "Bãi biển Vũng Tàu",
    "url": "https://qipedc.moet.gov.vn/videos/W00079.mp4"
  },
  {
    "gross": "bãi cát",
    "url": "https://qipedc.moet.gov.vn/videos/W00081.mp4"
  },
  {
    "gross": "bãi cỏ",
    "url": "https://qipedc.moet.gov.vn/videos/W00082.mp4"
  },
  {
    "gross": "bãi đỗ xe (ô tô)",
    "url": "https://qipedc.moet.gov.vn/videos/W00083.mp4"
  },
  {
    "gross": "bãi tắm",
    "url": "https://qipedc.moet.gov.vn/videos/W00084.mp4"
  },
  {
    "gross": "ban đêm",
    "url": "https://qipedc.moet.gov.vn/videos/W00086B.mp4"
  },
  {
    "gross": "ban đêm",
    "url": "https://qipedc.moet.gov.vn/videos/W00086N.mp4"
  },
  {
    "gross": "ban đêm",
    "url": "https://qipedc.moet.gov.vn/videos/W00086T.mp4"
  },
  {
    "gross": "ban giám hiệu",
    "url": "https://qipedc.moet.gov.vn/videos/W00087.mp4"
  },
  {
    "gross": "ban ngày",
    "url": "https://qipedc.moet.gov.vn/videos/W00089.mp4"
  },
  {
    "gross": "bàn bạc",
    "url": "https://qipedc.moet.gov.vn/videos/W00091.mp4"
  },
  {
    "gross": "bàn chải đánh răng",
    "url": "https://qipedc.moet.gov.vn/videos/W00092.mp4"
  },
  {
    "gross": "bàn chân",
    "url": "https://qipedc.moet.gov.vn/videos/W00093.mp4"
  },
  {
    "gross": "bàn ghế",
    "url": "https://qipedc.moet.gov.vn/videos/W00094.mp4"
  },
  {
    "gross": "bàn là",
    "url": "https://qipedc.moet.gov.vn/videos/W00095.mp4"
  },
  {
    "gross": "bàn phím (máy vi tính)",
    "url": "https://qipedc.moet.gov.vn/videos/W00096.mp4"
  },
  {
    "gross": "bàn tay",
    "url": "https://qipedc.moet.gov.vn/videos/W00097.mp4"
  },
  {
    "gross": "bàn tán",
    "url": "https://qipedc.moet.gov.vn/videos/W00098.mp4"
  },
  {
    "gross": "bản đồ Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/W00099B.mp4"
  },
  {
    "gross": "bản đồ Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/W00099N.mp4"
  },
  {
    "gross": "bản đồ Việt Nam",
    "url": "https://qipedc.moet.gov.vn/videos/W00099T.mp4"
  },
  {
    "gross": "bản làng",
    "url": "https://qipedc.moet.gov.vn/videos/W00100.mp4"
  },
  {
    "gross": "bản lề",
    "url": "https://qipedc.moet.gov.vn/videos/W00101.mp4"
  },
  {
    "gross": "bản nhạc",
    "url": "https://qipedc.moet.gov.vn/videos/W00102.mp4"
  },
  {
    "gross": "bản sao (chỉ người)",
    "url": "https://qipedc.moet.gov.vn/videos/W00103.mp4"
  },
  {
    "gross": "bản thân",
    "url": "https://qipedc.moet.gov.vn/videos/W00104.mp4"
  },
  {
    "gross": "bán buôn",
    "url": "https://qipedc.moet.gov.vn/videos/W00105.mp4"
  },
  {
    "gross": "bán đảo",
    "url": "https://qipedc.moet.gov.vn/videos/W00106.mp4"
  },
  {
    "gross": "bán hàng",
    "url": "https://qipedc.moet.gov.vn/videos/W00107B.mp4"
  },
  {
    "gross": "bán hàng",
    "url": "https://qipedc.moet.gov.vn/videos/W00107N.mp4"
  },
  {
    "gross": "bán hàng",
    "url": "https://qipedc.moet.gov.vn/videos/W00107T.mp4"
  },
  {
    "gross": "bán kính (hình tròn)",
    "url": "https://qipedc.moet.gov.vn/videos/W00108.mp4"
  },
  {
    "gross": "bạn",
    "url": "https://qipedc.moet.gov.vn/videos/W00110B.mp4"
  },
  {
    "gross": "bạn",
    "url": "https://qipedc.moet.gov.vn/videos/W00110N.mp4"
  },
  {
    "gross": "bạn",
    "url": "https://qipedc.moet.gov.vn/videos/W00110T.mp4"
  },
  {
    "gross": "bạn gái",
    "url": "https://qipedc.moet.gov.vn/videos/W00111B.mp4"
  },
  {
    "gross": "bạn gái",
    "url": "https://qipedc.moet.gov.vn/videos/W00111N.mp4"
  },
  {
    "gross": "bạn gái",
    "url": "https://qipedc.moet.gov.vn/videos/W00111T.mp4"
  },
  {
    "gross": "bạn trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00112B.mp4"
  },
  {
    "gross": "bạn trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00112N.mp4"
  },
  {
    "gross": "bạn trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00112T.mp4"
  },
  {
    "gross": "bảng học sinh",
    "url": "https://qipedc.moet.gov.vn/videos/W00113.mp4"
  },
  {
    "gross": "bảng chia",
    "url": "https://qipedc.moet.gov.vn/videos/W00115N.mp4"
  },
  {
    "gross": "bảng chia",
    "url": "https://qipedc.moet.gov.vn/videos/W00115T.mp4"
  },
  {
    "gross": "bảng chỉ dẫn",
    "url": "https://qipedc.moet.gov.vn/videos/W00116.mp4"
  },
  {
    "gross": "bảng chữ cái ngón tay",
    "url": "https://qipedc.moet.gov.vn/videos/W00118.mp4"
  },
  {
    "gross": "bảng cộng",
    "url": "https://qipedc.moet.gov.vn/videos/W00119B.mp4"
  },
  {
    "gross": "bảng cộng",
    "url": "https://qipedc.moet.gov.vn/videos/W00119N.mp4"
  },
  {
    "gross": "bảng cộng",
    "url": "https://qipedc.moet.gov.vn/videos/W00119T.mp4"
  },
  {
    "gross": "bảng cửu chương",
    "url": "https://qipedc.moet.gov.vn/videos/W00120.mp4"
  },
  {
    "gross": "bảng đen",
    "url": "https://qipedc.moet.gov.vn/videos/W00121B.mp4"
  },
  {
    "gross": "bảng đen",
    "url": "https://qipedc.moet.gov.vn/videos/W00121N.mp4"
  },
  {
    "gross": "bảng đen",
    "url": "https://qipedc.moet.gov.vn/videos/W00121T.mp4"
  },
  {
    "gross": "hãng máy bay",
    "url": "https://qipedc.moet.gov.vn/videos/W00122.mp4"
  },
  {
    "gross": "bảng màu",
    "url": "https://qipedc.moet.gov.vn/videos/W00123B.mp4"
  },
  {
    "gross": "bảng nhân",
    "url": "https://qipedc.moet.gov.vn/videos/W00124B.mp4"
  },
  {
    "gross": "bảng nhân",
    "url": "https://qipedc.moet.gov.vn/videos/W00124N.mp4"
  },
  {
    "gross": "bảng nhân",
    "url": "https://qipedc.moet.gov.vn/videos/W00124T.mp4"
  },
  {
    "gross": "hãng xe máy",
    "url": "https://qipedc.moet.gov.vn/videos/W00125.mp4"
  },
  {
    "gross": "bảng trừ",
    "url": "https://qipedc.moet.gov.vn/videos/W00126B.mp4"
  },
  {
    "gross": "bảng trừ",
    "url": "https://qipedc.moet.gov.vn/videos/W00126N.mp4"
  },
  {
    "gross": "bảng trừ",
    "url": "https://qipedc.moet.gov.vn/videos/W00126T.mp4"
  },
  {
    "gross": "bánh bột lọc",
    "url": "https://qipedc.moet.gov.vn/videos/W00127.mp4"
  },
  {
    "gross": "bánh cốm",
    "url": "https://qipedc.moet.gov.vn/videos/W00128.mp4"
  },
  {
    "gross": "bánh cuốn",
    "url": "https://qipedc.moet.gov.vn/videos/W00129B.mp4"
  },
  {
    "gross": "bánh cuốn",
    "url": "https://qipedc.moet.gov.vn/videos/W00129N.mp4"
  },
  {
    "gross": "bánh cuốn",
    "url": "https://qipedc.moet.gov.vn/videos/W00129T.mp4"
  },
  {
    "gross": "bánh Trung Thu",
    "url": "https://qipedc.moet.gov.vn/videos/W00130.mp4"
  },
  {
    "gross": "bánh đa",
    "url": "https://qipedc.moet.gov.vn/videos/W00131.mp4"
  },
  {
    "gross": "bánh đúc",
    "url": "https://qipedc.moet.gov.vn/videos/W00132.mp4"
  },
  {
    "gross": "bánh gai",
    "url": "https://qipedc.moet.gov.vn/videos/W00133.mp4"
  },
  {
    "gross": "bánh giầy",
    "url": "https://qipedc.moet.gov.vn/videos/W00134.mp4"
  },
  {
    "gross": "bánh giò",
    "url": "https://qipedc.moet.gov.vn/videos/W00135.mp4"
  },
  {
    "gross": "bánh gối",
    "url": "https://qipedc.moet.gov.vn/videos/W00136.mp4"
  },
  {
    "gross": "bánh mì",
    "url": "https://qipedc.moet.gov.vn/videos/W00137B.mp4"
  },
  {
    "gross": "bánh mì",
    "url": "https://qipedc.moet.gov.vn/videos/W00137N.mp4"
  },
  {
    "gross": "bánh mì",
    "url": "https://qipedc.moet.gov.vn/videos/W00137T.mp4"
  },
  {
    "gross": "bánh pizza",
    "url": "https://qipedc.moet.gov.vn/videos/W00140.mp4"
  },
  {
    "gross": "bánh pía",
    "url": "https://qipedc.moet.gov.vn/videos/W00141.mp4"
  },
  {
    "gross": "hãng tàu thuyền",
    "url": "https://qipedc.moet.gov.vn/videos/W00142.mp4"
  },
  {
    "gross": "bánh xe",
    "url": "https://qipedc.moet.gov.vn/videos/W00144.mp4"
  },
  {
    "gross": "bao giờ?",
    "url": "https://qipedc.moet.gov.vn/videos/W00145B.mp4"
  },
  {
    "gross": "bao giờ?",
    "url": "https://qipedc.moet.gov.vn/videos/W00145N.mp4"
  },
  {
    "gross": "bao giờ?",
    "url": "https://qipedc.moet.gov.vn/videos/W00145T.mp4"
  },
  {
    "gross": "bao la",
    "url": "https://qipedc.moet.gov.vn/videos/W00146.mp4"
  },
  {
    "gross": "bao nhiêu?",
    "url": "https://qipedc.moet.gov.vn/videos/W00147.mp4"
  },
  {
    "gross": "bao tay (dùng cho trẻ sơ sinh)",
    "url": "https://qipedc.moet.gov.vn/videos/W00150.mp4"
  },
  {
    "gross": "bảo đảm",
    "url": "https://qipedc.moet.gov.vn/videos/W00152.mp4"
  },
  {
    "gross": "bảo hiểm",
    "url": "https://qipedc.moet.gov.vn/videos/W00153.mp4"
  },
  {
    "gross": "lưu",
    "url": "https://qipedc.moet.gov.vn/videos/W00155.mp4"
  },
  {
    "gross": "bảo tàng",
    "url": "https://qipedc.moet.gov.vn/videos/W00156.mp4"
  },
  {
    "gross": "bảo thủ",
    "url": "https://qipedc.moet.gov.vn/videos/W00157.mp4"
  },
  {
    "gross": "tồn tại",
    "url": "https://qipedc.moet.gov.vn/videos/W00158.mp4"
  },
  {
    "gross": "bảo vệ môi trường",
    "url": "https://qipedc.moet.gov.vn/videos/W00159B.mp4"
  },
  {
    "gross": "bảo vệ môi trường",
    "url": "https://qipedc.moet.gov.vn/videos/W00159N.mp4"
  },
  {
    "gross": "bảo vệ môi trường",
    "url": "https://qipedc.moet.gov.vn/videos/W00159T.mp4"
  },
  {
    "gross": "báo (con báo)",
    "url": "https://qipedc.moet.gov.vn/videos/W00160B.mp4"
  },
  {
    "gross": "báo (con báo)",
    "url": "https://qipedc.moet.gov.vn/videos/W00160N.mp4"
  },
  {
    "gross": "báo (con báo)",
    "url": "https://qipedc.moet.gov.vn/videos/W00160T.mp4"
  },
  {
    "gross": "báo cáo",
    "url": "https://qipedc.moet.gov.vn/videos/W00161.mp4"
  },
  {
    "gross": "báo động",
    "url": "https://qipedc.moet.gov.vn/videos/W00163.mp4"
  },
  {
    "gross": "báo thù",
    "url": "https://qipedc.moet.gov.vn/videos/W00166.mp4"
  },
  {
    "gross": "bát",
    "url": "https://qipedc.moet.gov.vn/videos/W00170.mp4"
  },
  {
    "gross": "bát hương",
    "url": "https://qipedc.moet.gov.vn/videos/W00171.mp4"
  },
  {
    "gross": "bát ngát",
    "url": "https://qipedc.moet.gov.vn/videos/W00172.mp4"
  },
  {
    "gross": "làng gốm Bát Tràng",
    "url": "https://qipedc.moet.gov.vn/videos/W00173.mp4"
  },
  {
    "gross": "bay",
    "url": "https://qipedc.moet.gov.vn/videos/W00174.mp4"
  },
  {
    "gross": "xì hơi (đánh rắm)",
    "url": "https://qipedc.moet.gov.vn/videos/W00175.mp4"
  },
  {
    "gross": "xì hơi (đánh rắm)",
    "url": "https://qipedc.moet.gov.vn/videos/W00175N.mp4"
  },
  {
    "gross": "bay liệng (bay lượn)",
    "url": "https://qipedc.moet.gov.vn/videos/W00176.mp4"
  },
  {
    "gross": "bắc bán cầu",
    "url": "https://qipedc.moet.gov.vn/videos/W00179.mp4"
  },
  {
    "gross": "Bắc bộ",
    "url": "https://qipedc.moet.gov.vn/videos/W00181.mp4"
  },
  {
    "gross": "Bắc Giang",
    "url": "https://qipedc.moet.gov.vn/videos/W00182.mp4"
  },
  {
    "gross": "Bắc Kạn",
    "url": "https://qipedc.moet.gov.vn/videos/W00183.mp4"
  },
  {
    "gross": "bắc nam",
    "url": "https://qipedc.moet.gov.vn/videos/W00184N.mp4"
  },
  {
    "gross": "bắc nam",
    "url": "https://qipedc.moet.gov.vn/videos/W00184T.mp4"
  },
  {
    "gross": "Bắc Ninh",
    "url": "https://qipedc.moet.gov.vn/videos/W00185.mp4"
  },
  {
    "gross": "bắn bi",
    "url": "https://qipedc.moet.gov.vn/videos/W00186B.mp4"
  },
  {
    "gross": "bắn bi",
    "url": "https://qipedc.moet.gov.vn/videos/W00186N.mp4"
  },
  {
    "gross": "bắn bi",
    "url": "https://qipedc.moet.gov.vn/videos/W00186T.mp4"
  },
  {
    "gross": "bắn súng",
    "url": "https://qipedc.moet.gov.vn/videos/W00187.mp4"
  },
  {
    "gross": "băng bó",
    "url": "https://qipedc.moet.gov.vn/videos/W00188.mp4"
  },
  {
    "gross": "băng chuyền",
    "url": "https://qipedc.moet.gov.vn/videos/W00189.mp4"
  },
  {
    "gross": "băng dính",
    "url": "https://qipedc.moet.gov.vn/videos/W00190.mp4"
  },
  {
    "gross": "băng giá",
    "url": "https://qipedc.moet.gov.vn/videos/W00191.mp4"
  },
  {
    "gross": "băng hình",
    "url": "https://qipedc.moet.gov.vn/videos/W00192.mp4"
  },
  {
    "gross": "Băng-la-đét (nước Băng-la-đét)",
    "url": "https://qipedc.moet.gov.vn/videos/W00193.mp4"
  },
  {
    "gross": "bằng",
    "url": "https://qipedc.moet.gov.vn/videos/W00194.mp4"
  },
  {
    "gross": "bằng phẳng",
    "url": "https://qipedc.moet.gov.vn/videos/W00195.mp4"
  },
  {
    "gross": "bắp ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00196B.mp4"
  },
  {
    "gross": "bắp ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00196N.mp4"
  },
  {
    "gross": "bắp ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00196T.mp4"
  },
  {
    "gross": "bắt",
    "url": "https://qipedc.moet.gov.vn/videos/W00197.mp4"
  },
  {
    "gross": "bắt đền",
    "url": "https://qipedc.moet.gov.vn/videos/W00198.mp4"
  },
  {
    "gross": "bắt đền",
    "url": "https://qipedc.moet.gov.vn/videos/W00198B.mp4"
  },
  {
    "gross": "bắt đền",
    "url": "https://qipedc.moet.gov.vn/videos/W00198N.mp4"
  },
  {
    "gross": "bắt giữ",
    "url": "https://qipedc.moet.gov.vn/videos/W00199.mp4"
  },
  {
    "gross": "bắt nạt",
    "url": "https://qipedc.moet.gov.vn/videos/W00200.mp4"
  },
  {
    "gross": "bắt tay",
    "url": "https://qipedc.moet.gov.vn/videos/W00202.mp4"
  },
  {
    "gross": "bậc thang",
    "url": "https://qipedc.moet.gov.vn/videos/W00203.mp4"
  },
  {
    "gross": "bập bênh",
    "url": "https://qipedc.moet.gov.vn/videos/W00205.mp4"
  },
  {
    "gross": "bất động",
    "url": "https://qipedc.moet.gov.vn/videos/W00206.mp4"
  },
  {
    "gross": "bất hiếu",
    "url": "https://qipedc.moet.gov.vn/videos/W00207.mp4"
  },
  {
    "gross": "bật đèn",
    "url": "https://qipedc.moet.gov.vn/videos/W00209.mp4"
  },
  {
    "gross": "bật lửa",
    "url": "https://qipedc.moet.gov.vn/videos/W00210.mp4"
  },
  {
    "gross": "bầu trời",
    "url": "https://qipedc.moet.gov.vn/videos/W00212.mp4"
  },
  {
    "gross": "bẫy chim",
    "url": "https://qipedc.moet.gov.vn/videos/W00213.mp4"
  },
  {
    "gross": "bẫy chuột (hành động)",
    "url": "https://qipedc.moet.gov.vn/videos/W00214B.mp4"
  },
  {
    "gross": "bẫy chuột (hành động)",
    "url": "https://qipedc.moet.gov.vn/videos/W00214N.mp4"
  },
  {
    "gross": "bẫy chuột (hành động)",
    "url": "https://qipedc.moet.gov.vn/videos/W00214T.mp4"
  },
  {
    "gross": "bẫy chuột (dụng cụ)",
    "url": "https://qipedc.moet.gov.vn/videos/W00215.mp4"
  },
  {
    "gross": "bẻ ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00216B.mp4"
  },
  {
    "gross": "bẻ ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00216N.mp4"
  },
  {
    "gross": "bẻ ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00216T.mp4"
  },
  {
    "gross": "bé gái",
    "url": "https://qipedc.moet.gov.vn/videos/W00217.mp4"
  },
  {
    "gross": "bé hơn",
    "url": "https://qipedc.moet.gov.vn/videos/W00218.mp4"
  },
  {
    "gross": "bé loắt choắt",
    "url": "https://qipedc.moet.gov.vn/videos/W00219.mp4"
  },
  {
    "gross": "bé trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00220B.mp4"
  },
  {
    "gross": "bé trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00220N.mp4"
  },
  {
    "gross": "bé trai",
    "url": "https://qipedc.moet.gov.vn/videos/W00220T.mp4"
  },
  {
    "gross": "béo",
    "url": "https://qipedc.moet.gov.vn/videos/W00225.mp4"
  },
  {
    "gross": "bê tông",
    "url": "https://qipedc.moet.gov.vn/videos/W00228.mp4"
  },
  {
    "gross": "bể bơi",
    "url": "https://qipedc.moet.gov.vn/videos/W00230.mp4"
  },
  {
    "gross": "bể cá",
    "url": "https://qipedc.moet.gov.vn/videos/W00231.mp4"
  },
  {
    "gross": "bế em",
    "url": "https://qipedc.moet.gov.vn/videos/W00232.mp4"
  },
  {
    "gross": "bệ hạ",
    "url": "https://qipedc.moet.gov.vn/videos/W00234B.mp4"
  },
  {
    "gross": "bệ hạ",
    "url": "https://qipedc.moet.gov.vn/videos/W00234T.mp4"
  },
  {
    "gross": "bệ xí",
    "url": "https://qipedc.moet.gov.vn/videos/W00235.mp4"
  },
  {
    "gross": "bên cạnh",
    "url": "https://qipedc.moet.gov.vn/videos/W00236.mp4"
  },
  {
    "gross": "bên cạnh",
    "url": "https://qipedc.moet.gov.vn/videos/W00236N.mp4"
  },
  {
    "gross": "bên dưới",
    "url": "https://qipedc.moet.gov.vn/videos/W00237.mp4"
  },
  {
    "gross": "bên phải",
    "url": "https://qipedc.moet.gov.vn/videos/W00238.mp4"
  },
  {
    "gross": "bên trái",
    "url": "https://qipedc.moet.gov.vn/videos/W00239.mp4"
  },
  {
    "gross": "bên trên",
    "url": "https://qipedc.moet.gov.vn/videos/W00240.mp4"
  },
  {
    "gross": "bên trong",
    "url": "https://qipedc.moet.gov.vn/videos/W00241.mp4"
  },
  {
    "gross": "bến phà",
    "url": "https://qipedc.moet.gov.vn/videos/W00242.mp4"
  },
  {
    "gross": "bến tàu",
    "url": "https://qipedc.moet.gov.vn/videos/W00243.mp4"
  },
  {
    "gross": "Bến Tre",
    "url": "https://qipedc.moet.gov.vn/videos/W00244.mp4"
  },
  {
    "gross": "bến xe",
    "url": "https://qipedc.moet.gov.vn/videos/W00245.mp4"
  },
  {
    "gross": "bênh vực",
    "url": "https://qipedc.moet.gov.vn/videos/W00246.mp4"
  },
  {
    "gross": "bệnh thủy đậu",
    "url": "https://qipedc.moet.gov.vn/videos/W00247.mp4"
  },
  {
    "gross": "bệnh nhân",
    "url": "https://qipedc.moet.gov.vn/videos/W00248.mp4"
  },
  {
    "gross": "bệnh tật",
    "url": "https://qipedc.moet.gov.vn/videos/W00249.mp4"
  },
  {
    "gross": "bí ngô",
    "url": "https://qipedc.moet.gov.vn/videos/W00252.mp4"
  },
  {
    "gross": "bị động",
    "url": "https://qipedc.moet.gov.vn/videos/W00253.mp4"
  },
  {
    "gross": "bìa sách",
    "url": "https://qipedc.moet.gov.vn/videos/W00254.mp4"
  },
  {
    "gross": "bìa vở",
    "url": "https://qipedc.moet.gov.vn/videos/W00255B.mp4"
  },
  {
    "gross": "bìa vở",
    "url": "https://qipedc.moet.gov.vn/videos/W00255N.mp4"
  },
  {
    "gross": "bìa vở",
    "url": "https://qipedc.moet.gov.vn/videos/W00255T.mp4"
  },
  {
    "gross": "bịa đặt",
    "url": "https://qipedc.moet.gov.vn/videos/W00256.mp4"
  },
  {
    "gross": "hóa đơn",
    "url": "https://qipedc.moet.gov.vn/videos/W00258.mp4"
  },
  {
    "gross": "biển đông",
    "url": "https://qipedc.moet.gov.vn/videos/W00260.mp4"
  },
  {
    "gross": "biển hiệu",
    "url": "https://qipedc.moet.gov.vn/videos/W00261.mp4"
  },
  {
    "gross": "biến đổi",
    "url": "https://qipedc.moet.gov.vn/videos/W00262N.mp4"
  },
  {
    "gross": "biện pháp",
    "url": "https://qipedc.moet.gov.vn/videos/W00263.mp4"
  },
  {
    "gross": "biểu đồ",
    "url": "https://qipedc.moet.gov.vn/videos/W00265.mp4"
  },
  {
    "gross": "biểu đồ cột",
    "url": "https://qipedc.moet.gov.vn/videos/W00266.mp4"
  },
  {
    "gross": "biểu đồ hình quạt",
    "url": "https://qipedc.moet.gov.vn/videos/W00267.mp4"
  },
  {
    "gross": "biểu thị",
    "url": "https://qipedc.moet.gov.vn/videos/W00270.mp4"
  },
  {
    "gross": "biểu thức",
    "url": "https://qipedc.moet.gov.vn/videos/W00271.mp4"
  },
  {
    "gross": "bím tóc đuôi sam",
    "url": "https://qipedc.moet.gov.vn/videos/W00273.mp4"
  },
  {
    "gross": "bình an",
    "url": "https://qipedc.moet.gov.vn/videos/W00274B.mp4"
  },
  {
    "gross": "bình an",
    "url": "https://qipedc.moet.gov.vn/videos/W00274N.mp4"
  },
  {
    "gross": "bình an",
    "url": "https://qipedc.moet.gov.vn/videos/W00274T.mp4"
  },
  {
    "gross": "Bình Dương",
    "url": "https://qipedc.moet.gov.vn/videos/W00276.mp4"
  },
  {
    "gross": "Bình Định",
    "url": "https://qipedc.moet.gov.vn/videos/W00277.mp4"
  },
  {
    "gross": "bình minh",
    "url": "https://qipedc.moet.gov.vn/videos/W00279.mp4"
  },
  {
    "gross": "bình phương",
    "url": "https://qipedc.moet.gov.vn/videos/W00282.mp4"
  },
  {
    "gross": "Bình Phước",
    "url": "https://qipedc.moet.gov.vn/videos/W00283.mp4"
  },
  {
    "gross": "Bình Thuận",
    "url": "https://qipedc.moet.gov.vn/videos/W00285.mp4"
  },
  {
    "gross": "bình thường",
    "url": "https://qipedc.moet.gov.vn/videos/W00286B.mp4"
  },
  {
    "gross": "bình thường",
    "url": "https://qipedc.moet.gov.vn/videos/W00286N.mp4"
  },
  {
    "gross": "bình thường",
    "url": "https://qipedc.moet.gov.vn/videos/W00286T.mp4"
  },
  {
    "gross": "bít tất",
    "url": "https://qipedc.moet.gov.vn/videos/W00287.mp4"
  },
  {
    "gross": "bò",
    "url": "https://qipedc.moet.gov.vn/videos/W00288.mp4"
  },
  {
    "gross": "bò sát",
    "url": "https://qipedc.moet.gov.vn/videos/W00289.mp4"
  },
  {
    "gross": "bò tót",
    "url": "https://qipedc.moet.gov.vn/videos/W00290.mp4"
  },
  {
    "gross": "bỏ hoang",
    "url": "https://qipedc.moet.gov.vn/videos/W00292.mp4"
  },
  {
    "gross": "bỏ phiếu",
    "url": "https://qipedc.moet.gov.vn/videos/W00293.mp4"
  },
  {
    "gross": "bỏ qua",
    "url": "https://qipedc.moet.gov.vn/videos/W00294.mp4"
  },
  {
    "gross": "bỏ rơi",
    "url": "https://qipedc.moet.gov.vn/videos/W00295.mp4"
  },
  {
    "gross": "bó đũa",
    "url": "https://qipedc.moet.gov.vn/videos/W00297.mp4"
  },
  {
    "gross": "bó hoa",
    "url": "https://qipedc.moet.gov.vn/videos/W00298.mp4"
  },
  {
    "gross": "bóc lột",
    "url": "https://qipedc.moet.gov.vn/videos/W00299.mp4"
  },

]

# Dữ liệu từ vựng (ví dụ)
vocabularies_data = [
    "địa chỉ", "tỉnh", "tiếp tân"
]

@courses.route('/dictionary', methods=['GET'])
def get_dictionary():
    # Get query parameters
    search = request.args.get('search', '')  # Search keyword
    page = int(request.args.get('page', 1))  # Current page (default 1)
    limit = int(request.args.get('limit', 10))  # Items per page (default 10)

    # Filter videos by search term if provided
    if search:
        filtered_videos = [video for video in videos_data if search.lower() in video["gross"].lower()]
    else:
        filtered_videos = videos_data

    # Calculate total pages
    total_videos = len(filtered_videos)
    total_pages = (total_videos + limit - 1) // limit  # Ceiling division for total pages

    # Paginate videos
    start_index = (page - 1) * limit
    end_index = start_index + limit
    paginated_videos = filtered_videos[start_index:end_index]

    # Return paginated data along with vocabularies
    return jsonify({
        "videos": paginated_videos,
        "vocabularies": vocabularies_data,
        "totalPages": total_pages
    })
