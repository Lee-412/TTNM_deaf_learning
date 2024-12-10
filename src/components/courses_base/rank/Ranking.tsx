"use client";

import { Divider, Text } from "@mantine/core";
import { userData } from "@/data/data";
import "./Ranking.css";


interface DataUser {

}
const Ranking = (props: any) => {
  const { data } = props;

  const sortedData = [...data].sort(
    (a, b) => b.point - a.point
  );

  const rows = sortedData.map((item, index) => (
    <tr key={item.id} className="tr">
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
          {item.point}
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
