import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/AnimeCarousel.css';

type Anime = {
    id: number,
    title: string,
    image: string,
};

function AnimeCarousel(){
    const [animeList, setAnimeList] = useState<Anime[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/popular')
        .then(res => res.json())
        .then(data => setAnimeList(data))
        .catch(err => console.error('Error fetching anime: ', err))
    }, []);

    return (
        <div className='carousel-wrapper'>
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
                        <div className='slideCard' data-swiper-parallax="-100" onClick={() => window.location.href = "/"}>
                            <img src={anime.image} alt={anime.title} />
                            <h3>{anime.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default AnimeCarousel;