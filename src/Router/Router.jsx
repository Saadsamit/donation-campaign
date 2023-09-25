import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import DonationcardDetails from "../pages/DonationcardDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: ()=> fetch('/Donations.json'),
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
        path: "/donate/:id",
        element: <DonationcardDetails></DonationcardDetails>,
    },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }
      ]
    }
  ]);


export default router;