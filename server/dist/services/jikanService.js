"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPopularAnime = fetchPopularAnime;
exports.fetchSeasonAnime = fetchSeasonAnime;
exports.fetchUpcomingAnime = fetchUpcomingAnime;
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
//# sourceMappingURL=jikanService.js.map