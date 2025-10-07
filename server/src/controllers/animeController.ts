import {Request, Response } from 'express';
import {  fetchPopularAnime } from '../services/jikanService';

export async function getPopularAnime(req: Request, res:Response){
    try{
        const animeList = await fetchPopularAnime();
        res.json(animeList);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch anime data'});
    }
}