import { NavbarNested } from "@/components/courses_base/navbar/NavbarNested"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{display: "flex"}} >
            <div className="course-navbar">
            <NavbarNested />
            </div>
        
            <div className="course-content" style={{paddingLeft: "20px", paddingTop: "20px", width: "100%"}}>
                <div style={{textAlign: "center", color: "white"}}>
                    <h1> Khóa học </h1>
                </div>
                
                {children}
            
            </div>
        
        </div>
    )
}