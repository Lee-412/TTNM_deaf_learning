"use client";
import classes from './about.module.css';
import { Container, Grid, Title, Text, Card } from "@mantine/core";


const AboutBase = () => {
  const features = [
    { id: 1, title: "Học tập linh hoạt và hiệu quả" },
    { id: 2, title: "Thư viện tổng hợp" },
    { id: 3, title: "Khóa học chia theo chủ đề" },
    { id: 4, title: "Cung cấp thủ ngữ từ Việt Nam, Mỹ và Nhật Bản" },
    { id: 5, title: "Quiz kiểm tra" },
    { id: 6, title: "Sử dụng công nghệ AI tiên tiến" },
  ];
  
  return (
    <div className={classes.container}>
        <div className={classes.banner}>
        <h1 className={classes.logo}>
                Signlearn
            </h1>
            <div className={classes.title}>Học ngôn ngữ kí hiệu dễ dàng và hiệu quả</div>
            
        </div>

        <div className={classes.project}>
            
        </div>

        <div className={classes.team}>

        </div>
    </div>
  );
};

export default AboutBase;
