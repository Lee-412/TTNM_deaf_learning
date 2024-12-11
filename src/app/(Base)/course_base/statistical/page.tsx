import Statistics from "@/components/profile/statical/Statistics";
import Statical from "@/components/profile/statical/Statistics";

const StatisticalPage = async () => {

    //đây là demo cho anh, sau xuống trang dưới, thì trực tiếp gọi r ném userId vào là được
    // const res = await fetch(`http://127.0.0.1:5002/users/statistic/${userId}`);
    const res = await fetch(`http://127.0.0.1:5002/users/statistic/5`);
    const data = await res.json();
    console.log("data_statistic", data.statistics[0]);

    return (
        <Statistics />
    )
}
export default StatisticalPage;