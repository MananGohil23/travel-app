import { Outlet } from "react-router"
import pkg from "@syncfusion/ej2-react-navigations";
import { MobileSidebar , NavItems} from "../../../components";
const { SidebarComponent } = pkg;
const AdminLayout = () => {
  return (
    <div className = "admin-layout">
        <MobileSidebar/>


      <aside className = "w-full max-w-[270px] hidden md:block">
        <SidebarComponent width = "270px" enableGestures={false}>
            <NavItems/>
        </SidebarComponent>
      </aside>


      <aside className = "children">
        <Outlet />
      </aside>

      
    </div>
  )
}

export default AdminLayout
