import {Request, Response } from 'express';
import {  fetchPopularAnime, fetchSeasonAnime, fetchUpcomingAnime, fetchAnimeById } from '../services/jikanService';

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

export async function getAnimeById(req: Request, res: Response){
    const { id } = req.params; 
    if (!id) {
        return res.status(400).json({ error: 'Anime ID is required' });
    }
    
    try{
        const anime = await fetchAnimeById(id);
        res.json(anime);
    }catch(err){
        res.status(500).json({error:'Failed to fetch anime by id'});
    }
}