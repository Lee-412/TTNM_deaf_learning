'use client'
import { useContext, useEffect } from "react";
import HomePage1 from "./components/homepage1/homepage1";
import HomePage2 from "./components/homepage2/homepage2";
import HomePage3 from "./components/homepage3/homepage3";
import HomePage4 from "./components/homepage4/homepage4";
import HomePage5 from "./components/homepage5/homepage5";
import HomePage6 from "./components/homepage6/homepage6";
import HomePage7 from "./components/homepage7/homepage7";
import { useRouter } from "next/navigation";
import { UserContext } from "../useContext/userContext";



const HomePage = () => {
    const router = useRouter()
    const { user, loginContext } = useContext(UserContext);
    useEffect(() => {
        console.log('check user homepage', user);

        if (user && user.isAuthenticate === true) {
            console.log('hit  user');

        }
        else {
            console.log('hit no user');

        }
    }, [user])


    // sessionStorage.removeItem('userData')
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