import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Définir le port (variable d'env ou 3000 par défaut)
const PORT: number = parseInt(process.env.PING_LISTEN_PORT || '3000', 10);

// Route GET /ping qui retourne les headers de la requête
app.get('/ping', (req: Request, res: Response) => {
    res.json({ headers: req.headers });
});

// Route 404 pour toute requête autre que GET /ping
app.use((req: Request, res: Response) => {
    res.status(404).send('');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});

