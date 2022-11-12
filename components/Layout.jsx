import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />{" "}
      <div>
        {" "}
        {children} <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
