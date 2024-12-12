import Ranking from "@/components/courses_base/rank/Ranking";

const RankPage = async () => {
    const res = await fetch('http://127.0.0.1:5002/users');
    const data = await res.json();

    return (
        <Ranking data={data} />
    )
}
export default RankPage;