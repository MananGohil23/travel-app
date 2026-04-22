// @ts-nocheck
import { useState } from "react";
import { Link } from "react-router";
import NavItems from "./navItems";


const MobileSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
        <div className={sidebarOpen
            ? 'bg-white w-64 fixed h-screen shadow transition-transform duration-300 translate-x-0'
            : 'bg-white w-64 fixed h-screen shadow transition-transform duration-300 -translate-x-64'}>

        </div>
        <div className = "md:hidden">
            <header className = "flex bg-white justify-between p-4">
                {/* <Link to = "/" className = "flex items-center gap-2">
                    <img src = "/assets/icons/logo.svg" alt = "Logo" className = "size-[30px]"/>
                    <h1 className = "text-2xl font-bold">
                    Tourizzm
                    </h1>
                </Link> */}
                <div className = "flex items-center gap-2">
                    <img src = "/assets/icons/logo.svg" alt = "Logo" className = "size-[30px]"/>
                    <h1 className = 'text-2xl font-bold'>Tourizzm</h1>
                </div>

                <button 
                    className = "p-2 text-xl font-bold cursor-pointer hover:bg-gray-100 rounded transition-colors"
                    onClick = {() => {
                        setSidebarOpen(!sidebarOpen);
                    }}
                >
                    sidebar
                    {/* <img
                        src = "/assets/icons/menu.svg"
                        alt = "Menu"   
                        className = "size-7"
                    /> */}
                </button>  
            
            </header>  
        </div>
    </div>
  );
};

export default MobileSidebar