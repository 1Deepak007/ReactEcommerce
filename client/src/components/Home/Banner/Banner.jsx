import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner" >
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>I make my music at night when there's no noise... Just me, my headphones and the silence. But I'm always making music in my head. It's like a non-stop radio!</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
};

export default Banner;
