import Navbar from "../components/Navbar";
// import bgImg from "../assets/bg.png";

const Homelayout = () => {
  return (
    <div className="relative bg-[url('/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <header>
          <Navbar></Navbar>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Homelayout;
