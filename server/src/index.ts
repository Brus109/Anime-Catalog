import express, {Request, Response} from 'express';
import cors from 'cors';
import animeRoutes from './routes/anime';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', animeRoutes);

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});