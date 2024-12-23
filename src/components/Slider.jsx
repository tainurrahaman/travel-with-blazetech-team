import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Slider = () => {
  const [places, setPlaces] = useState([]);
  const [activePlace, setActivePlace] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.log(err));
  }, []);

  const handleImageClick = (place) => {
    // Navigate to a new component with the selected place info
    navigate(`/place/${place.name}`, { place });
  };

  return (
    <div className="w-full p-4 flex space-x-4 pb-10">
      {/* Left Side: Active Place Description and Button */}
      <div className="w-1/2  py-4 rounded-lg shadow-md">
        <h2 className="text-6xl font-bebasNueue pb-5 text-yellow-400">
          Booked Your Travelling spot with BlazeTech Team
        </h2>
        <h2 className="text-7xl font-bebasNueue ">{activePlace.name}</h2>
        <p className="mt-2 text-[16px]">
          {activePlace.description?.length > 100
            ? activePlace.description.slice(0, 200) + " . . ."
            : activePlace.description}
        </p>
        <button
          className="mt-4 border-none btn bg-[#F9A51A] flex items-center"
          onClick={() => handleImageClick(activePlace)}
        >
          Booking
          <span>
            <FaArrowRightLong></FaArrowRightLong>
          </span>
        </button>
      </div>

      {/* Right Side: Images of all data */}
      <div className="w-1/2 flex flex-wrap gap-4">
        {places.map((place) => (
          <div
            key={place.name}
            className="w-[270px] h-[200px] p-2"
            onClick={() => setActivePlace(place)}
          >
            <div className="rounded-lg shadow-md cursor-pointer">
              <img
                src={place.images}
                alt={place.name}
                className={`w-full h-40 object-cover rounded-md ${
                  activePlace.name === place.name
                    ? "border-2 border-yellow-600"
                    : ""
                }`}
              />
              <h3 className="text-center mt-2 font-bebasNueue text-2xl">
                {place.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
