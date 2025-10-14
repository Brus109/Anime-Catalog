import {Request, Response } from 'express';
import {  fetchPopularAnime, fetchSeasonAnime, fetchUpcomingAnime } from '../services/jikanService';

export async function getPopularAnime(req: Request, res:Response){
    try{
        const animeList = await fetchPopularAnime();
        res.json(animeList);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch anime data'});
    }
}

export async function getSeasonAnime(req: Request, res:Response){
    try{
        const animeSeasonList = await fetchSeasonAnime();
        res.json(animeSeasonList);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch season anime data'});
    }
}

export async function getUpcomingAnime(req: Request, res: Response){
    try{
        const upcominAnime = await fetchUpcomingAnime();
        res.json(upcominAnime);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch upcoming anime data'});
    }
}