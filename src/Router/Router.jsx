import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/donation",
          element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }
      ]
    }
  ]);


export default router;