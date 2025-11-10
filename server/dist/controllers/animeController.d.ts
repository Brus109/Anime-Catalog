import { Request, Response } from 'express';
export declare function getPopularAnime(req: Request, res: Response): Promise<void>;
export declare function getSeasonAnime(req: Request, res: Response): Promise<void>;
export declare function getUpcomingAnime(req: Request, res: Response): Promise<void>;
export declare function getAnimeById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=animeController.d.ts.map