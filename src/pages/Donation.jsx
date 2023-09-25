import { useOutletContext } from "react-router-dom";
import MyCard from "./../components/MyCard";
import { useState } from "react";
const Donation = () => {
  const [toggle, setToggle] = useState(false);
  const myData = useOutletContext();
  const LsData = JSON.parse(localStorage.getItem("ids"));
  const filterid = myData.filter((data) => LsData.includes(data.id));
  return (
    <div>
        <div className="pt-28 pb-10 container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
      {toggle ? (
        filterid.map((data, idx) => (
            <MyCard key={idx} data={data}></MyCard>
          ))
      ) : filterid.slice(0,4).map((data, idx) => (
        <MyCard key={idx} data={data}></MyCard>
      ))}
    </div>
    <div className="flex justify-center">
    <button onClick={()=>setToggle(!toggle)} className="py-3 px-5 rounded-lg mb-10 bg-[#009444] text-white">{toggle ? "See Less" : "See All"}</button>
  </div>
    </div>
  );
};
// (data.id)
export default Donation;
