import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayOut = () => {
  return (
    <div>
      <p>Main Layout</p>
      {/* Navbar */}
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
