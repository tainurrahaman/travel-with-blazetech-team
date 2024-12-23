import Navbar from "../components/Navbar";

const BookingPages = () => {
  return (
    <div className="relative bg-[url('/bg.png')]  bg-cover font-montseerat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-24  w-11/12 mx-auto"></main>
      </div>
    </div>
  );
};

export default BookingPages;
