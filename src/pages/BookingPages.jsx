import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaCalendarAlt } from "react-icons/fa";

const BookingPages = () => {
  const location = useLocation();
  const { place } = location.state || {};
  console.log(place);

  return (
    <div className="relative bg-[url('/bg.png')]  bg-cover font-montseerat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-20  w-11/12 mx-auto">
          <div className="flex justify-between gap-28 items-center">
            <div>
              <h2 className="text-7xl font-bebasNueue ">{place.name}</h2>
              <p className="mt-2 text-[16px]">{place.description}</p>
            </div>
            <div className="flex justify-center items-center ml-20 bg-blue-100 text-gray-700">
              <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Booking Form
                </h2>
                <form>
                  {/* Origin */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium  mb-1">
                      Origin
                    </label>
                    <input
                      type="text"
                      placeholder="Dhaka"
                      className="input input-bordered w-full font-bold"
                    />
                  </div>

                  {/* Destination */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder={place.name}
                      className="input input-bordered w-full font-bold"
                    />
                  </div>

                  {/* Date Range */}
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        From
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="input input-bordered w-full "
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        To
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button className="btn bg-[#F9A51A] w-full">
                      Start Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookingPages;
