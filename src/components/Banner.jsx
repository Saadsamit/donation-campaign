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
            <h1 className="text-[#0B0B0B] text-5xl font-bold">I Grow By Helping People In Need</h1>
          </div>
        </div>
      </div>
    );
};

export default Banner;