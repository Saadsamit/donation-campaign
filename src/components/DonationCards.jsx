import Donationcard from "./Donationcard";
import { useOutletContext } from "react-router-dom";

const DonationCards = () => {
    const mydata = useOutletContext()
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 container mx-auto my-20 gap-6">
            {mydata.map((data,idx)=><Donationcard key={idx} data={data}></Donationcard>)}
        </div>
    );
};

export default DonationCards;