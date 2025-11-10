import  express  from "express";
import { getPopularAnime, getSeasonAnime, getUpcomingAnime, getAnimeById } from '../controllers/animeController';

const router = express.Router();
router.get('/popular', getPopularAnime);
router.get('/season', getSeasonAnime);
router.get('/upcoming', getUpcomingAnime);
router.get('/anime/:id', getAnimeById);

export default router;