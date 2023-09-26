import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import DonationcardDetails from "../pages/DonationcardDetails";
import PageError from "../pages/PageError";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: ()=> fetch('/Donations.json'),
      errorElement: <PageError></PageError>,
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