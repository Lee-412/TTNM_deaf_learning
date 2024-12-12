'use client';
import { useMediaQuery } from "@mantine/hooks";
import Statistic from "./statical/Statistics";
import User from "./user/User";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/components/useContext/userContext';
import { useRouter } from "next/navigation";

const Profile = () => {
    const isSmallScreen = useMediaQuery("(max-width: 1000px)");
    const { user } = useContext(UserContext);
    const [data, setData] = useState(user);
    const [dataStatistic, setDataStatistic] = useState(null);
    const router = useRouter()
    if (!user) {
        router.push('/')

    }
    useEffect(() => {
        let userData = user;
        if (!user) {
            const userSession = sessionStorage.getItem('user');
            if (userSession) {
                userData = JSON.parse(userSession);
            }
            else {
                router.push('/')
            }
        }
        setData(userData);

        const fetchData = async () => {
            if (userData) {
                try {


                    const res = await fetch(`http://127.0.0.1:5002/users/statistic/${userData.account.id}`);
                    if (res.status === 200) {
                        const statistic = await res.json();

                        setDataStatistic(statistic);
                    }
                    else {
                        router.push('/')
                    }

                } catch (error) {
                    console.error("Error fetching statistics:", error);
                }
            }
            else {
                router.push('/')
            }
        };

        fetchData();
    }, [user, router, data]);

    if (!data) {
        return <div>Loading user data...</div>;
    }

    return (
        <div style={{
            display: isSmallScreen ? "block" : "grid",
            gridTemplateColumns: "1fr 3fr",
            backgroundColor: "#F2F5FA",
            paddingTop: "50px"
        }}>
            {data && <User data={data} />}
            {dataStatistic && <Statistic dataStatistic={dataStatistic} />}
        </div>
    );
};

export default Profile;
