'use client'
import React, { createContext, useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { getUserAccount } from "@/utils/request";
const UserContext = createContext<any>(null);

export interface ContextData {
    isAuthenticate: boolean;
    token: string;
    account: {
        email: string,
        username: string,
        id: number,
        point: number
    }
}

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();


    const [user, setUser] = useState({
        isLoading: true,
        isAuthenticate: false,
        token: '',
        account: {}
    });

    const defaultUser = {
        isLoading: true,
        isAuthenticate: false,
        token: '',
        account: {}
    }

    const loginContext = (userData: ContextData) => {
        setUser({ ...userData, isLoading: false })
    };

    const logoutContext = () => {

        setUser(() => ({
            isLoading: false,
            isAuthenticate: false,
            token: '',
            account: {}
        }));
        sessionStorage.removeItem('user');
        window.location.reload();

    };

    const router = useRouter();


    const fetchUserContext = async () => {
        try {

            const response = getUserAccount();


            if (response.code === 0) {
                let dataUser: ContextData = JSON.parse(response.data);
                setUser({
                    isLoading: false,
                    isAuthenticate: true,
                    token: dataUser.token,
                    account: {
                        email: 'no comment',
                        username: 'no comment',
                        id: 'no comment',
                        number: 'no comment'
                    }
                })
            }
            else {
                setUser(() => ({
                    isLoading: false,
                    isAuthenticate: false,
                    token: '',
                    account: {}
                }));
            }





        } catch (error) {
            console.error('Error fetching user account:', error);
            setUser(() => ({
                isLoading: false,
                isAuthenticate: false,
                token: '',
                account: {}
            }));
        }
    };


    useEffect(() => {


        if (pathname === '/') {

            // fetchUserContext();

        }
        else if (pathname !== '/login') {

            // fetchUserContext();
        }
        else {


            // setUser(() => ({
            //     isLoading: false,
            //     isAuthenticate: false,
            //     token: '',
            //     account: {}
            // }));
        }
    }, [pathname]);

    return (
        <UserContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}

        </UserContext.Provider>

    );
}

export { UserContext, UserProvider }