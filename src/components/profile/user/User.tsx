'use client'
import { Table, Container } from "@mantine/core";
import classes from "./User.module.css";

const User = () => {
    const user1 = 
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          password: "password123",
          totalWordsStudied: 100,
        };
    

    return (
        <Container size="sm" style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center", color: "black" }}>User Information</h1>
      <Table striped  className={classes.verticalTable}>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{user1.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{user1.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user1.email}</td>
          </tr>
          <tr>
            <th>TotalPoint</th>
            <td>{user1.totalWordsStudied}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    );
}

export default User;