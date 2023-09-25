import { Outlet,useLoaderData } from "react-router-dom";
import MyNav from "./components/MyNav";

function App() {
  const data = useLoaderData()
  return (
    <div className="relative">
        <MyNav></MyNav>
        <Outlet context={data}></Outlet>
      </div>
  );
}

export default App;
