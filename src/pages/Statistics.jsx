import RechartsPi from "../components/RechartsPi";

const Statistics = () => {
    
    return (
        <div className="pb-5">
            <div className="pt-28 flex justify-center items-center overflow-hidden">
            <RechartsPi></RechartsPi>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 space-x-0">
                <div className="flex items-center justify-center">
                <p className="text-[#0B0B0B] text-lg font-normal pr-4">Your Donation</p>
                <div className="bg-[#00C49F] px-20 h-5 rounded-sm"></div>
                </div>
                <div className="flex items-center justify-center">
                <p className="text-[#0B0B0B] text-lg font-normal pr-4">Total Donation</p>
                <div className="bg-[#FF444A] px-20 h-5 rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;