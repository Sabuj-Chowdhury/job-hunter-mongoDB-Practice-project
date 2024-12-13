import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayOut = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
