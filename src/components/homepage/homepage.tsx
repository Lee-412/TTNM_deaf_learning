'use client'
import { useEffect } from "react";
import HomePage1 from "./components/homepage1/homepage1";
import HomePage2 from "./components/homepage2/homepage2";
import HomePage3 from "./components/homepage3/homepage3";
import HomePage4 from "./components/homepage4/homepage4";
import HomePage5 from "./components/homepage5/homepage5";
import HomePage6 from "./components/homepage6/homepage6";
import HomePage7 from "./components/homepage7/homepage7";
import { useRouter } from "next/navigation";



const HomePage = () => {
    let data;
    const router = useRouter()

    useEffect(() => {
        let dataParse = sessionStorage.getItem('userData');
        if (dataParse) {
            data = JSON.parse(dataParse);
            console.log(data);
        }
        else {
            router.push('/signin')
        }
    }, [])


    sessionStorage.removeItem('userData')
    return (
        <div>
            <HomePage1 />
            <HomePage2 />
            <HomePage3 />
            <HomePage4 />
            <HomePage5 />
            <HomePage6 />
            <HomePage7 />
        </div>
    )
}

export default HomePage;