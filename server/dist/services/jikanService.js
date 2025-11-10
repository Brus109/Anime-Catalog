"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPopularAnime = fetchPopularAnime;
exports.fetchSeasonAnime = fetchSeasonAnime;
exports.fetchUpcomingAnime = fetchUpcomingAnime;
exports.fetchAnimeById = fetchAnimeById;
const axios_1 = __importDefault(require("axios"));
async function fetchPopularAnime() {
    try {
        const response = await axios_1.default.get('https://api.jikan.moe/v4/top/anime');
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from popular anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        return response.data.data.map((anime) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    }
    catch (error) {
        console.error('Error fetching popular anime:', error);
        throw error;
    }
}
async function fetchSeasonAnime() {
    try {
        const response = await axios_1.default.get('https://api.jikan.moe/v4/seasons/now');
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from season anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        return response.data.data.map((anime) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    }
    catch (error) {
        console.error('Error fetching season anime:', error);
        throw error;
    }
}
async function fetchUpcomingAnime() {
    try {
        const response = await axios_1.default.get('https://api.jikan.moe/v4/seasons/upcoming');
        if (!response.data || !Array.isArray(response.data.data)) {
            console.error('Invalid response structure from upcoming anime API:', response.data);
            throw new Error('Invalid API response structure');
        }
        return response.data.data.map((anime) => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.image_url || '',
        }));
    }
    catch (error) {
        console.error('Error fetching upcoming anime:', error);
        throw error;
    }
}
async function fetchAnimeById(id) {
    try {
        const response = await axios_1.default.get(`https://api.jikan.moe/v4/anime/${id}`);
        const anime = response.data.data;
        return {
            id: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.large_image_url,
            synopsis: anime.synopsis,
            episodes: anime.episodes,
            score: anime.score,
            genres: anime.genres.map((g) => g.name),
        };
    }
    catch (err) {
    }
}
//# sourceMappingURL=jikanService.js.map