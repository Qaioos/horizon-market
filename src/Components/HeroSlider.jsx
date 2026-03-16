// React Router
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination ,Autoplay} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function HeroSlider() {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <Swiper
                    loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={
                            {dynamicBullets:true}
                        }
                        modules={[Pagination,Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>
                                    Microsoft xbox <br /> 360 Controller
                                </h3>
                                <p>Windows xp/10/7/8 pps3, Tv Box</p>
                                <Link to="/" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                            <img
                                src="/src/img/banner_Hero1.jpg"
                                alt="Slider Hero1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>
                                    Microsoft xbox <br /> 360 Controller
                                </h3>
                                <p>Windows xp/10/7/8 pps3, Tv Box</p>
                                <Link to="/" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                            <img
                                src="/src/img/banner_Hero2.jpg"
                                alt="Slider Hero1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>
                                    Microsoft xbox <br /> 360 Controller
                                </h3>
                                <p>Windows xp/10/7/8 pps3, Tv Box</p>
                                <Link to="/" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                            <img
                                src="/src/img/banner_Hero3.jpg"
                                alt="Slider Hero1"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
