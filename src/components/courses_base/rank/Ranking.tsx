"use client";

import { Divider, Text } from "@mantine/core";
import { userData } from "@/data/data";
import "./Ranking.css";

const userInfo = [
  { userID: 1, name: "John Doe", email: "john.doe@example.com", totalWordStudied: 100 },
  { userID: 2, name: "Jane Smith", email: "jane.smith@example.com", totalWordStudied: 150 },
  { userID: 3, name: "Emily Brown", email: "emily.brown@example.com", totalWordStudied: 200 },
  { userID: 4, name: "Michael Johnson", email: "michael.j@example.com", totalWordStudied: 250 },
  { userID: 5, name: "Chris Lee", email: "chris.lee@example.com", totalWordStudied: 300 },
  { userID: 6, name: "Sarah Kim", email: "sarah.kim@example.com", totalWordStudied: 350 },
  { userID: 7, name: "David Nguyen", email: "david.nguyen@example.com", totalWordStudied: 400 },
  { userID: 8, name: "Sophia Martinez", email: "sophia.m@example.com", totalWordStudied: 450 },
  { userID: 9, name: "Daniel Carter", email: "daniel.carter@example.com", totalWordStudied: 500 },
  { userID: 10, name: "Jessica Wilson", email: "jessica.w@example.com", totalWordStudied: 550 },
];

const Ranking = () => {
  const sortedData = [...userInfo].sort(
    (a, b) => b.totalWordStudied - a.totalWordStudied
  );

  const rows = sortedData.map((item, index) => (
    <tr key={item.userID} className="tr">
      <td className="td">
        <span className={`badge ${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}`}>
          {index > 2 ? index + 1 : ""}
        </span>
      </td>
      <td className="td">
      <Text size="sm" fw={500}>
            {item.name}
          </Text>
      </td>
      <td className="td">
        <Text size="sm" fw={500}>
          {item.email}
        </Text>
      </td>
      <td className="td">
        <Text size="sm" fw={500}>
          {item.totalWordStudied}
        </Text>
      </td>
    </tr>
  ));

  return (
    <div>
      <Divider my="md" />
        <div className={"ranking-heading"}>
          <Text className={"ranking-title"}>Bảng xếp hạng</Text>
        </div>
        <Divider my="md" color="blue" />

        <div className="table-container">
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Xếp hạng</th>
            <th className="th">Tên</th>
            <th className="th">Email</th>
            <th className="th">Tổng điểm</th>
          </tr>
        </thead>
        <tbody className="tbody">{rows}</tbody>
      </table>
    </div>
    </div>
    
  );
};

export default Ranking;
