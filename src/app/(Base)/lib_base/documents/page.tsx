
import DocumentBase from "@/components/lib_base/document_base/document.base";

const documentPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK_API_URL}librarys/document`);
    const data = await res.json();

    return (
        <>
            <DocumentBase data={data} />
        </>
    );
};

export default documentPage;