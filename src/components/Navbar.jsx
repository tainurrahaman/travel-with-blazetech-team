import navLogo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="text-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img src={navLogo} alt="Logo" className="h-14 w-[120px] invert" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative max-w-md mx-auto">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search your Destination..."
              className="w-[370px] py-2 pl-10 pr-4 rounded-[5px] bg-white/20  border border-gray-300 placeholder-white focus:outline-none "
            />

            {/* Search Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white font-bold">
              <FiSearch></FiSearch>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6 mr-5">
          <a href="#news" className="hover:text-yellow-400">
            News
          </a>
          <a href="#destination" className="hover:text-yellow-400">
            Destination
          </a>
          <a href="#blog" className="hover:text-yellow-400">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

        {/* Login Button */}
        <button className="btn btn-warning">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
