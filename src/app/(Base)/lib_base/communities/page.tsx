import ComunityBase from "@/components/lib_base/community_base/comunity.base";

interface data_comunity {
    id: number;
    title: string;
    imgUrl: string;
    content: string;
    contact: any
}

const ComunityPage = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK_API_URL}librarys/comunity`);
    const data = await res.json();

    const formattedData = data.map((item: data_comunity) => ({
        id: item.id,
        title: item.title,
        imgUrl: item.imgUrl,
        content: item.content,
        contact: item.contact ? JSON.parse(item.contact) : [],
    }));

    return (
        <>
            <ComunityBase data={formattedData} />
        </>
    )
}
export default ComunityPage;