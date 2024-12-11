'use client'
import { useMediaQuery } from "@mantine/hooks";
import Statistic from "./statical/Statistics";
import User from "./user/User";

const Profile = () => {
    const isSmallScreen = useMediaQuery("(max-width: 1000px)");
    
    return (
        <div   style={{
            display: isSmallScreen ? "block" : "grid",
            gridTemplateColumns: "1fr 3fr",
            backgroundColor: "#F2F5FA",
            paddingTop: "50px"
          }}>
        <User />
        <Statistic />
        </div>
    );
}

export default Profile;