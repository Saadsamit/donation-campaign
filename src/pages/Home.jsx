import { useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import DonationCards from "../components/DonationCards";
import { useState } from 'react';

const Home = () => {
    const [searchData, setSearchData] = useState([])
    const mydata = useOutletContext()
    const handlesubmit = (e)=>{
        e.preventDefault()
        const inputValue = e.target.childNodes[0].value
        const filterData = mydata.filter((data)=> data.tag.toLowerCase() === inputValue.toLowerCase())
        setSearchData(filterData)
        e.target.childNodes[0].value = ""
    }
    
    return (
        <>
            <Banner handlesubmit={handlesubmit}></Banner>
            <DonationCards searchData={searchData}></DonationCards>
        </>
    );
};

export default Home;