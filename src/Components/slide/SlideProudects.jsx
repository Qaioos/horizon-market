//React
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Components
import Proudects from "./Proudects";
//Css
import "../../css/slideProduct.css";

function SlideProudects({ data, title }) {
  

    return (
        <div className="slide_products slide">
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p></p>
                </div>
            </div>

            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Proudects item={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default SlideProudects;
