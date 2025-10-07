import  express  from "express";
import { getPopularAnime } from '../controllers/animeController';

const router = express.Router();
router.get('/popular', getPopularAnime);

export default router;