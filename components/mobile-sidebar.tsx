// @ts-nocheck
import { useRef } from "react";
import pkg from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./navItems";
const { SidebarComponent } = pkg;

const MobileSidebar = () => {
    const sidebar = useRef(null);
    const toggleSidebar = () => {
        sidebar.current?.toggle();
    }
  return (
    <div className = "mobile-sidebar wrapper">
        <header className = "flex items-center">
            <Link to = "/" className = "flex items-center gap-2">
                <img src = "/assets/icons/logo.svg" alt = "Logo" className = "size-[30px]"/>
                <h1>
                Tourizzm
                </h1>
            </Link>

            <button onClick={toggleSidebar} className = "ml-auto">
                <img
                    src = "/assets/icons/menu.svg"
                    alt = "Menu"   
                    className = "size-7"
                />
            </button>  
        
        </header>  

        <SidebarComponent
            width={270}
            ref={(Sidebar) => sidebar.current  = Sidebar}
            created={() => {
                if (sidebar.current) sidebar.current.hide();
            }}
            closeOnDocumentClick={true}
            showBackdrop={true} 
            type = "over"    
        >
            <NavItems handleClick={toggleSidebar}/>
        </SidebarComponent>
    </div>
  );
};

export default MobileSidebar