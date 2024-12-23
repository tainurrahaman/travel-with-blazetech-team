import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { AuthContext } from "../provider/AuthProvider";
import Loadingpage from "../pages/Loadingpage";

const Homelayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loadingpage></Loadingpage>;
  }

  return (
    <div className="relative bg-[url('/bg.png')]  bg-cover font-montseerat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-24  w-11/12 mx-auto">
          <Slider></Slider>
        </main>
        <footer className="w-full">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default Homelayout;
