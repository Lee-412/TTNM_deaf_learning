import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { UserProvider } from "@/components/useContext/userContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        < >
            <UserProvider>
                <Header />
                {children}
                <Footer />
            </UserProvider>
        </>
    )
}