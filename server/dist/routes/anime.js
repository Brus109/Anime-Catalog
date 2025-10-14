"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animeController_1 = require("../controllers/animeController");
const router = express_1.default.Router();
router.get('/popular', animeController_1.getPopularAnime);
router.get('/season', animeController_1.getSeasonAnime);
router.get('/upcoming', animeController_1.getUpcomingAnime);
exports.default = router;
//# sourceMappingURL=anime.js.map