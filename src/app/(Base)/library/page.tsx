
import LibraryBase from "@/components/lib_base/lib.base";


const LibraryPage = async () => {
    console.log("check", process.env.NEXT_PUBLIC_SERVER_LINK_API_URL)

    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK_API_URL}librarys`);
    const res = await fetch('http://127.0.0.1:5002/librarys');

    const data = await res.json();
    return (
        <>
            <LibraryBase data={data} />

        </>
    );
};

export default LibraryPage;