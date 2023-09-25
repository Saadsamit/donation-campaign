import bannerBg from "../assets/BannerBg.png"
const Banner = () => {
    const MybgStyle = {
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className="hero min-h-screen" style={MybgStyle}>
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="text-[#0B0B0B] sm:text-5xl text-3xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex justify-center">
            <form className="h-full w-2/3 flex sm:flex-row flex-col justify-center items-center pt-10">
                <input type="text" className="border py-4 sm:rounded-s-lg sm:rounded-none rounded-lg sm:w-10/12 w-full text-black text-base ps-4"  placeholder="Search here...."/>
                <button className="text-white bg-[#FF444A] py-4 px-5 sm:rounded-e-lg sm:rounded-none rounded-lg sm:w-4/12 w-8/12 sm:mt-0 mt-4">Search</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;