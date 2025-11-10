import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/AnimeCarousel.css';
import {Anime} from "../types/anime";

type Props = {
  title: string;
  animeList: Anime[];
};

function AnimeCarousel({title, animeList}: Props){
    return (
        <div className='carousel-section'>
            <h2>{title}</h2>
            <Swiper 
                modules={[Autoplay]}
                parallax={true}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{delay:2500,disableOnInteraction:false}}
            >
                {animeList.map((anime) => (
                    <SwiperSlide key={anime.id}>
                        <Link to={`/anime/${anime.id}`} className="slideCard" data-swiper-parallax="-100">
                            <div className="imageWrapper">
                                <img src={anime.image} alt={anime.title} />
                                <div className="gradientOverlay"></div>
                                <h3>{anime.title}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default AnimeCarousel;