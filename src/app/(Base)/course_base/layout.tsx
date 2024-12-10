import { NavbarNested } from "@/components/courses_base/navbar/NavbarNested"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{display: "flex", backgroundColor: "#f0fbfd"}} >
            <div className="course-navbar" style={{background: "white", borderRight: "1px solid rgb(227, 227, 227)"}} >
            <NavbarNested />
            </div>
        
            <div className="course-content" style={{paddingLeft: "20px", paddingTop: "20px", width: "100%", transition: "width 0.3s"}}>
                
                
                {children}
            
            </div>
        
        </div>
    )
}