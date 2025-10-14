import React, { useEffect, useState, useRef } from "react";
import AnimeCarousel from "../components/AnimeCarousel";
import {Anime} from "../types/anime";

function Home(){
    const hasFetched = useRef(false);
    const [popular, setPopular] = useState<Anime[]>([]);
    const [season, setSeason] = useState<Anime[]>([]);
    const [upcoming, setUpcoming] = useState<Anime[]>([]);
    
    useEffect(() => {
         if (hasFetched.current) return;
        hasFetched.current = true;
        
        const fetchAnimeData = async () => {
            try {
                const popularRes = await fetch('http://localhost:5000/api/popular');
                const popularData = await popularRes.json();
                setPopular(popularData);

                const seasonRes = await fetch('http://localhost:5000/api/season');
                const seasonData = await seasonRes.json();
                setSeason(seasonData);

                const upcomingRes = await fetch('http://localhost:5000/api/upcoming');
                const upcomingData = await upcomingRes.json();
                setUpcoming(upcomingData);
            } catch (err) {
                console.error('Error fetching anime: ', err);
            }
        };
        fetchAnimeData();
    }, []);

    return (
        <div>
            <AnimeCarousel title={"{Most Popular}"} animeList={popular}/>
            <AnimeCarousel title={"{Seasonal Anime}"} animeList={season}/>
            <AnimeCarousel title={"{Upcoming Anime}"} animeList={upcoming}/>
        </div>
    )
}

export default Home;