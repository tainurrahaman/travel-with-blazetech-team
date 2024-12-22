import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
// import bgImg from "../assets/bg.png";

const Homelayout = () => {
  return (
    <div className="relative bg-[url('/bg.png')]  bg-cover font-montseerat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white w-11/12 mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-24">
          <Slider></Slider>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Homelayout;
