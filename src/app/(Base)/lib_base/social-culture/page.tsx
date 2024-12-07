import SocialCultureBase from "@/components/lib_base/culture_base/social.culture";

const SocialCulturePage = async () => {



    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK_API_URL}librarys/social-culture`);
    const res = await fetch('http://127.0.0.1:5002/librarys/social-culture');


    const data = await res.json();
    return (
        <>
            <SocialCultureBase data={data} />
        </>
    )
}
export default SocialCulturePage;


