import { useParams } from  "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Anime } from '../types/anime';
import Loading  from '../components/Loading';

function AnimeDetail(){
    const hasFetched = useRef(false);
    const { id } = useParams();
    const [anime, setAnime] = useState<Anime | null>(null);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchAnime = async () => {
            try{
                const res = await fetch(`http://localhost:5000/api/anime/${id}`);
                const data = await res.json();
                setAnime(data);
            }catch(err){
                console.error('Failed to fetch anime details: ', err);
            }
        };
        fetchAnime();
    }, [id]);

    if (!anime) return <Loading/>; //Check this to center the animation, beacuse it shows at the top of the page

    return (
        <div className="anime-detail">
            <h1>{anime.title}</h1>
            <img src={anime.image} alt="{anime.title}" />
        </div>
    );
}

export default AnimeDetail; 