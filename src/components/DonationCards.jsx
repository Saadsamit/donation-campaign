import Donationcard from "./Donationcard";
import { useOutletContext } from "react-router-dom";
import { PropTypes } from 'prop-types';

const DonationCards = ({searchData}) => {
    const outletData = useOutletContext()
    const mydata = searchData.length > 0 ? searchData : outletData
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 container mx-auto my-20 gap-6">
            {mydata.map((data,idx)=><Donationcard key={idx} data={data}></Donationcard>)}
        </div>
    );
};
DonationCards.propTypes = {
    searchData: PropTypes.array.isRequired
  }
export default DonationCards;