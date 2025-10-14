"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularAnime = getPopularAnime;
exports.getSeasonAnime = getSeasonAnime;
exports.getUpcomingAnime = getUpcomingAnime;
const jikanService_1 = require("../services/jikanService");
async function getPopularAnime(req, res) {
    try {
        const animeList = await (0, jikanService_1.fetchPopularAnime)();
        res.json(animeList);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch anime data' });
    }
}
async function getSeasonAnime(req, res) {
    try {
        const animeSeasonList = await (0, jikanService_1.fetchSeasonAnime)();
        res.json(animeSeasonList);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch season anime data' });
    }
}
async function getUpcomingAnime(req, res) {
    try {
        const upcominAnime = await (0, jikanService_1.fetchUpcomingAnime)();
        res.json(upcominAnime);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch upcoming anime data' });
    }
}
//# sourceMappingURL=animeController.js.map