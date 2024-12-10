"use client";
import { Container, Grid, Card, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import "./Statistics.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Statistic = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  // Data for charts
  const lineData = {
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    datasets: [
      {
        label: "Số giờ đã học",
        data: [1, 3, 5, 2, 1, 4, 3],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
    userID: 1,
  };

  const barData = {
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    datasets: [
      {
        label: "Số chữ đã học",
        data: [2, 4, 0, 1, 5, 5, 11],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
    userID: 2,
  };

  const pieData = {
    labels: ["Công việc", "Gia đình", "Trái cây", "Động vật"],
    datasets: [
      {
        data: [20, 15, 25, 10],
        backgroundColor: [
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
    userID: 3,
  };

  const doughnutData = {
    labels: ["Công việc", "Gia đình", "Trái cây", "Động vật", "Đồ ăn"],
    datasets: [
      {
        data: [5, 10, 15, 20, 25],
        backgroundColor: [
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
    userID: 4,
  };

  return (
    <Container className="statistic-container">
      <Text
        style={{ textAlign: "center", fontSize: "35px" }}
        fw={700}
        mt="md"
        mb="lg"
      >
        Thống kê dữ liệu học tập
      </Text>
      <Grid gutter="md" style={{ paddingLeft: "20px" }}>
      <Grid.Col span={isSmallScreen ? 12 : 6}>
          <Card shadow="sm" padding="lg">
            <Text fw={500} mb="sm">
              Lượng chữ đã học theo chủ đề
            </Text>
            <div style={{ margin: "0 auto" }}>
              <Pie data={pieData} />
            </div>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={isSmallScreen ? 12 : 6}>
          <Card shadow="sm" padding="lg">
            <Text fw={500} mb="sm">
              Số chữ đã học
            </Text>
            
            <div style={{height: "300px", width: "auto"}}>
            <Bar data={barData} />
            </div>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={isSmallScreen ? 12 : 12}>
          <Card shadow="sm" padding="lg">
            <Text fw={500} mb="sm">
              Số giờ đã học
            </Text>
            <Line data={lineData} />
            
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Statistic;
