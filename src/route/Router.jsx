import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import BookingPages from "../pages/BookingPages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    // children: [
    //   {
    //     path: `/${place.name}`,
    //     element: <BookingPages></BookingPages>,
    //   },
    // ],
  },
]);

export default Router;
