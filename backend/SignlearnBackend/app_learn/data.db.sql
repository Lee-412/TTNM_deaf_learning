BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "community_data" (
	"id"	INTEGER NOT NULL,
	"title"	VARCHAR(100) NOT NULL,
	"imgUrl"	VARCHAR(100) NOT NULL,
	"content"	VARCHAR(1000) NOT NULL,
	"contact"	JSON NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "document_data" (
	"id"	INTEGER NOT NULL,
	"title"	VARCHAR(100),
	"content"	JSON,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "learningdata" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(100) NOT NULL,
	"target"	VARCHAR(100) NOT NULL,
	"data"	JSON NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "libbase_data" (
	"id"	INTEGER NOT NULL,
	"title"	VARCHAR(100) NOT NULL,
	"imgUrl"	VARCHAR(100) NOT NULL,
	"content"	VARCHAR(1000) NOT NULL,
	"target"	VARCHAR(100) NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "revise_data" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(100) NOT NULL,
	"target"	VARCHAR(100) NOT NULL,
	"data"	JSON NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "social_data" (
	"id"	INTEGER NOT NULL,
	"content"	JSON,
	"title"	VARCHAR(100),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "user" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(100) NOT NULL,
	"email"	VARCHAR(100) NOT NULL,
	"password"	VARCHAR(100) NOT NULL,
	"point"	INTEGER,
	PRIMARY KEY("id")
);
INSERT INTO "community_data" VALUES (1,'PARD Vietnam','/static/img/communities/PARD.png','Trung tâm vì người điếc (PARD) hướng đến một xã hội hòa nhập, nơi mà người điếc có sự tiếp cận đầy đủ với ngôn ngữ ký hiệu và sự bình đẳng khi tham gia các hoạt động xã hội.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/pardvietnam\"}, {\"channel\": \"Website\", \"url\": \"https://pardvietnam.com/\"}]"');
INSERT INTO "community_data" VALUES (2,'Chi Hội Người Điếc Hà Nội - HAD','/static/img/communities/HAD.jpg','Chi hội người điếc Hà Nội - HAD là tổ chức xã hội của người Điếc trên địa bàn thành phố Hà Nội.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/hadeaf2000\"}, {\"channel\": \"Website\", \"url\": \"http://deafhanoi.com/index.html\"}]"');
INSERT INTO "community_data" VALUES (3,'Trung tâm Khiếm thính (CED)','/static/img/communities/CED.png','Trung tâm Nghiên cứu Giáo dục Người Khiếm thính (CED) - Chiếc cầu nối gắn kết người nghe bình thường.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/CED.Thegioikhiemthinh/\"}, {\"channel\": \"Website\", \"url\": \"https://ced.org.vn/\"}]"');
INSERT INTO "community_data" VALUES (4,'Thể thao người điếc Việt Nam','/static/img/communities/TTND.png','Trang chia sẻ hoạt động của phong trào thể thao người điếc Việt Nam.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/VNDeafSport\"}]"');
INSERT INTO "community_data" VALUES (5,'Nghe bằng Mắt','/static/img/communities/NBM.png','Mang người Điếc và người nghe tới gần nhau hơn thông qua con đường nghệ thuật.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/NghebangMat\"}]"');
INSERT INTO "community_data" VALUES (6,'The Fingerese','/static/img/communities/FINGERESE.jpg','The Fingerese là một dự án phi lợi nhuận được thành lập bởi một nhóm học sinh cấp ba trên địa bàn thành phố Hà Nội, được ấp ủ và thành lập sau khi các bạn đã có những trải nghiệm thực tế, tự mình chứng kiến và thấu hiểu sự khó khăn trong quá trình hòa nhập của Cộng đồng người Điếc với xã hội hiện nay.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/thefingerese\"}]"');
INSERT INTO "community_data" VALUES (7,'Hội những người yêu thích ngôn ngữ ký hiệu','/static/img/communities/Default.png','Nhóm được thành lập nhằm tạo sân chơi giao lưu lành mạnh, học hỏi thêm kĩ năng, ngôn ngữ, tìm kiếm cơ hội việc làm cho anh chị em Khiếm Thính, những ai yêu thích đang sử dụng ngôn ngữ ký hiệu và những ai có đam mê và mong muốn được học ngôn ngữ này để giao tiếp.','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/groups/223775082706706\"}]"');
INSERT INTO "community_data" VALUES (8,'Hội người khiếm thính','/static/img/communities/Default.png','','"[{\"channel\": \"Facebook\", \"url\": \"https://www.facebook.com/groups/733560506839053\"}]"');
INSERT INTO "document_data" VALUES (1,'Tài liệu','[{"title": "H\u01b0\u1edbng d\u1eabn h\u1ecdc th\u1ee7 ng\u1eef khi ti\u1ebfp x\u00fac v\u1edbi ng\u01b0\u1eddi khi\u1ebfm th\u00ednh", "url": "http://me.phununet.com/WikiPhununet/ChiTietWiKi.aspx?m=0&StoreID=26631", "imgUrl": "/static/img/document/HDHTN.png", "content": ""}, {"title": "M\u1ed9t s\u1ed1 ph\u01b0\u01a1ng th\u1ee9c h\u00ecnh th\u00e0nh k\u00ed hi\u1ec7u c\u1ee7a ng\u01b0\u1eddi \u0111i\u1ebfc Vi\u1ec7t Nam", "url": "http://vjes.vnies.edu.vn/sites/default/files/baivietso6_0.pdf", "imgUrl": "/static/img/document/MSPT.png", "content": ""}, {"title": "C\u00e1ch h\u1ecdc ng\u00f4n ng\u1eef k\u00fd hi\u1ec7u", "url": "https://www.recursosdeautoayuda.com/vi/c%C3%A1ch-h%E1%BB%8Dc-ng%C3%B4n-ng%C6%B0%E1%BB%9B-k%C3%BD-hi%E1%BB%87u/", "imgUrl": "/static/img/document/CHNNKH.png", "content": ""}]');
INSERT INTO "document_data" VALUES (2,'Bài hát','[{"title": "N\u01a1i \u1ea5y con t\u00ecm v\u1ec1", "url": "https://youtu.be/59oywtLlcRU", "imgUrl": "/static/img/document/NYCTV.png", "content": ""}, {"title": "S\u1ed1ng nh\u01b0 nh\u1eefng \u0111\u00f3a hoa", "url": "https://youtu.be/DYmQwqdGIWI", "imgUrl": "/static/img/document/SNNDH.png", "content": ""}, {"title": "Happy Birthday", "url": "https://youtu.be/de0oH9uaTvI", "imgUrl": "/static/img/document/HB.png", "content": ""}, {"title": "My heart will go on", "url": "https://youtu.be/-6Xzz8jOpBI", "imgUrl": "/static/img/document/MHWGO.png", "content": ""}, {"title": "Hai m\u01b0\u01a1i hai", "url": "https://youtu.be/8fXtGS98ihM", "imgUrl": "/static/img/document/HMH.png", "content": ""}, {"title": "\u01af\u1edbc m\u01a1 c\u1ee7a m\u1eb9", "url": "https://www.youtube.com/watch?v=CUztUo7AQZY", "imgUrl": "/static/img/document/UMCM.png", "content": ""}]');
INSERT INTO "document_data" VALUES (3,'Truyện, thơ','[{"title": "Th\u00e1ng Gi\u00f3ng", "url": "https://youtu.be/3b4w3TUCvSY", "imgUrl": "/static/img/document/TG.png", "content": "Truy\u1ec7n"}, {"title": "C\u00e2u chuy\u1ec7n b\u00f3 \u0111\u0169a", "url": "https://youtu.be/Fu7RVQonBn8", "imgUrl": "/static/img/document/CCBD.png", "content": "Truy\u1ec7n"}, {"title": "C\u00f4 b\u00e9 b\u00e1n di\u00eam", "url": "https://youtu.be/I2tDpZS6pDY", "imgUrl": "/static/img/document/CBBD.png", "content": "Truy\u1ec7n"}, {"title": "T\u00edch Chu", "url": "https://youtu.be/rYMAOwfBIU8", "imgUrl": "/static/img/document/TC.png", "content": "Truy\u1ec7n"}, {"title": "Nh\u1ed5 c\u1ee7 c\u1ea3i", "url": "https://youtu.be/fI3loPmZMLY", "imgUrl": "/static/img/document/NCC.png", "content": "Truy\u1ec7n"}, {"title": "L\u00e0m anh", "url": "https://youtu.be/JCK29NbNtUg", "imgUrl": "/static/img/document/LAA.png", "content": "Th\u01a1"}]');
INSERT INTO "libbase_data" VALUES (1,'Tài liệu','https://i.pinimg.com/1200x/d5/18/47/d5184769459b4521b88b555b523b5208.jpg','Tài liệu hướng dẫn cách học và sử dụng ngôn ngữ ký kiệu, video,...','documents');
INSERT INTO "libbase_data" VALUES (2,'Văn hóa - Xã hội','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAquYEdVkqjY8hbI0lcZbiF6bh3Kw36VSuA&s','Khám phá văn hóa, xã hội và hoạt động của cộng đồng người khiếm thính. Các nhân vật truyền cảm hứng và tổ chức truyền lửa.','social-culture');
INSERT INTO "libbase_data" VALUES (3,'Cộng đồng trực tuyến','https://th.bing.com/th/id/OIP.KheH7TyVVOlgb0S1HLZFdwHaHa?rs=1&pid=ImgDetMain','Danh sách các cộng đồng trực tuyến về ngôn ngữ ký hiệu','communities');
COMMIT;
