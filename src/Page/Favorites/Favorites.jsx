import { useContext } from "react";
import { Favoret } from "../../Components/Contexts/FavoretContext";
import PageTransition from "../../Components/PageTransition";
import Proudects from "../Products/Proudects";
import SlideProudects from "../../Components/slide/SlideProudects";
import { SwiperSlide } from "swiper/react";

function Favorites() {
    const { favitems } = useContext(Favoret);
    return (
        <PageTransition>
            <div className="category_products FavoritesPage">
                <div className="container">
                    <div className="top_slide">
                        <h2>Your Favoretes</h2>
                    </div>
                    {favitems.length === 0 ? (
                        <p>No Favorites Products</p>
                    ) : (
                        <div className="products">
                            <SwiperSlide >
                            {favitems.map((item => (
                            <Proudects item={item} />
                        )))}
                        </SwiperSlide>
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    )
    ;
}

export default Favorites;
