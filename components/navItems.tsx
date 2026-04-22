import { Link, NavLink } from "react-router";
import { sidebarItems } from "../app/constants";
import { cn } from "../app/lib/utils";
const NavItems = () => {
    const user = {
        name: "Manan",
        email: "manangohil2357@gmail.com",
        imageUrl: "/assets/images/manan-icon.png"    
    }

  return (
    <section className = "nav-items h-screen flex flex-col">
        <Link to = '/' className = "link-logo">
            <img src = "/assets/icons/logo.svg" alt = "logo" className = "size-[30px]" />
            <h1>Tourizzm</h1>
        </Link>
        <div className = "container">
            <nav>
                {sidebarItems.map(({ id , href , icon , label}) => (
                    <NavLink to = {href} key = {id}>
                        {({isActive}:{isActive: boolean})=> (
                            <div className = {cn('group nav-item'  , {'bg-primary-100 !text-white':isActive})}>
                                <img src = {icon}
                                    alt = {label}
                                    className = {`group-hover:brightness-0 size-[20px] group-hover:invert ${isActive ? 'brightness-0 invert': 'text-dark'}`}/>
                                {label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>
            <footer className = "nav-footer">
                <img src={user?.imageUrl || "/assets/images/manan-icon.png"} alt = {user?.name || "Manan"}/>
                <article>
                    <h2>{user?.name || "Manan"}</h2>
                    <p>{user?.email || "manangohil2357@gmail.com"}</p>
                </article>
                <button onClick={()=>{
                    console.log("Logout")
                }}
                className = "cursor-pointer">
                    <img src = "/assets/icons/logout.svg" alt = "logout" className = "size-[20px]"/>
                </button>
            </footer>
        </div>
    </section>
  )
} 

export default NavItems