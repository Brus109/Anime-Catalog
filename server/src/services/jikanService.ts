import axios from 'axios';

export async function fetchPopularAnime(){
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    return response.data.data.map((anime: any) => ({
        id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.image_url,
    }));
}   