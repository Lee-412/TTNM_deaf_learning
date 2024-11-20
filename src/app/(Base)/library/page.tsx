
import LibraryBase from "@/components/lib_base/lib.base";


const LibraryPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK_API_URL}librarys`);
    const data = await res.json();
    return (
        <>
            <LibraryBase data={data} />

        </>
    );
};

export default LibraryPage;