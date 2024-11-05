'use client'
import { useContext, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Reason from "./components/Reason/Reason";
import Specialness from "./components/Specialness/Specialness";
import QnA from "./components/QnA/QnA";
import Contact from "./components/Contact/Contact";
import { useRouter } from "next/navigation";
import { UserContext } from "../useContext/userContext";
import style from "./homepage.module.css"


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
        <div className={style.container}>
            <Banner />
            <About />
            <Reason />
            <Specialness />
            <QnA />
            <Contact />
        </div>
    )
}

export default HomePage;