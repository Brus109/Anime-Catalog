import axios from 'axios';

export async function fetchPopularAnime(){
    try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from popular anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        
        return response.data.data.map((anime: any) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    } catch (error) {
        console.error('Error fetching popular anime:', error);
        throw error;
    }
}   

export async function fetchSeasonAnime(){
    try {
        const response = await axios.get('https://api.jikan.moe/v4/seasons/now');
        
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from season anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        
        return response.data.data.map((anime: any) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    } catch (error) {
        console.error('Error fetching season anime:', error);
        throw error;
    }
}

export async function fetchUpcomingAnime(){
    try {
        const response = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from upcoming anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        
        return response.data.data.map((anime: any) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    } catch (error) {
        console.error('Error fetching upcoming anime:', error);
        throw error;
    }
}

export async function fetchAnimeById(id: string){
    try{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        const anime = response.data.data;

        return {
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.large_image_url,
            synopsis: anime.synopsis,
            episodes: anime.episodes,
            score: anime.score,
            genres: anime.genres.map((g: any) => g.name),
        };
    }catch(err){

    }
}
