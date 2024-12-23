import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import BookingPages from "../pages/BookingPages";
import SignIn from "../pages/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/bookingPages",
    element: <BookingPages></BookingPages>,
  },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
]);

export default Router;
