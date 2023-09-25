import { Outlet } from "react-router-dom"
import MyNav from "./components/MyNav"


function App() {

  return (
    <div className="relative">
    <MyNav></MyNav>
    <Outlet></Outlet>
    </div>
  )
}

export default App
