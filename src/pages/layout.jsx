import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <Header />
  
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  export default Layout;