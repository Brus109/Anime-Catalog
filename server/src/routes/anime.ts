import  express  from "express";
import { getPopularAnime, getSeasonAnime, getUpcomingAnime } from '../controllers/animeController';

const router = express.Router();
router.get('/popular', getPopularAnime);
router.get('/season', getSeasonAnime);
router.get('/upcoming', getUpcomingAnime);

export default router;