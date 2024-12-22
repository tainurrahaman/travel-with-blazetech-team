import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
]);

export default Router;
