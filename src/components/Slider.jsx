import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// import { useHistory } from "react-router-dom";

const Slider = () => {
  const places = [
    {
      name: "Coxsbazar",
      description:
        "Coxsbazar is a beautiful beach located on the southeastern coast of Bangladesh. It is known as the longest unbroken sandy sea beach in the world, stretching over 120 kilometers along the Bay of Bengal. The beach offers stunning views, with golden sands and clear blue waters, making it a popular tourist destination. Visitors can enjoy a variety of activities, including beach sports, sunbathing, swimming, and boating. The region is rich in seafood and local culture, and it features several resorts, restaurants, and hotels for tourists seeking relaxation and adventure. Coxsbazar is also a gateway to the nearby Himchari National Park and Inani Beach.",
      images:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=1100&h=1100&s=1",
    },
    {
      name: "Sundarban",
      description:
        "Sundarban is the largest mangrove forest in the world, located in the southwestern part of Bangladesh. This UNESCO World Heritage site is renowned for its unique ecosystem and rich biodiversity. The forest is home to the famous Bengal tiger, along with a variety of wildlife such as crocodiles, monkeys, deer, and numerous bird species. It also serves as a natural buffer against coastal erosion, protecting the inland areas from tidal waves and storms. The Sundarbans offer a remarkable experience for nature lovers, with opportunities for wildlife photography, boat rides, and eco-tourism. The area is a must-visit destination for those interested in exploring one of the most pristine and ecologically important regions in the world.",
      images:
        "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2023/09/27/ev_ert5t_n5.jpg",
    },
    {
      name: "Srimongol",
      description:
        "Srimongol, located in the northeastern region of Bangladesh, is known as the 'Tea Capital of Bangladesh.' This picturesque hill station is famous for its lush tea gardens, which cover vast stretches of rolling hills. Srimongol’s cool climate and green landscapes make it an ideal destination for those seeking a peaceful retreat in nature. Apart from tea plantation tours, visitors can explore the nearby Lawachara National Park, which is home to rare species such as the hoolock gibbons and various types of birds. The region is also known for its rich biodiversity, and travelers can indulge in activities like hiking, bird watching, and experiencing the local culture. Srimongol’s tea is internationally renowned for its quality, and the region offers visitors a chance to taste and purchase the best blends.",
      images:
        "https://pathfriend-bd.com/wp-content/uploads/2019/08/Tea-Capital-Sylhet-2.gif",
    },
    {
      name: "Sant Martin",
      description:
        "Sant Martin is a small tropical island located in the Bay of Bengal, off the coast of Bangladesh. Known for its pristine beaches and crystal-clear waters, the island is a hidden gem for beach lovers and water sports enthusiasts. Sant Martin is famous for its coral reefs, making it an excellent destination for snorkeling and diving. The island's lush vegetation, peaceful environment, and fresh seafood make it a perfect getaway for relaxation and exploration. In addition to enjoying the scenic beaches, visitors can take boat rides around the island or visit the nearby uninhabited island of Chera Dwip. Sant Martin also has a rich local culture, with friendly villagers and traditional fishing practices, adding to the charm of this beautiful island.",
      images:
        "https://www.tripsilo.com/uploads/images/tours/slider/644403_12496316_10153273503225248_3424486551059093533_o.jpg",
    },
  ];

  const [activePlace, setActivePlace] = useState(places[0]);
  //   const history = useHistory();

  const handleImageClick = (place) => {
    // Navigate to a new component with the selected place info
    history.push(`/place/${place.name}`, { place });
  };

  return (
    <div className="w-full p-4 flex space-x-4 pb-10">
      {/* Left Side: Active Place Description and Button */}
      <div className="w-1/2  py-4 rounded-lg shadow-md">
        <h2 className="text-7xl font-bebasNueue ">{activePlace.name}</h2>
        <p className="mt-2 text-[16px]">
          {activePlace.description.length > 100
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

      {/* Right Side: Images of all Places */}
      <div className="w-1/2 flex flex-wrap gap-4">
        {places.map((place) => (
          <div
            key={place.name}
            className="w-[270px] h-[200px] p-2"
            onClick={() => setActivePlace(place)}
          >
            <div className="rounded-lg shadow-md cursor-pointer">
              <img
                src={place.images} // Displaying the first image as the thumbnail
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
