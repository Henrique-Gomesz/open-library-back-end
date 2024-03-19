import express, { Application, Request, Response } from 'express';
import { MongoDatabase } from './db/connection';
const app: Application = express();
const port = process.env.PORT || 8000;


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});


MongoDatabase.connect().then(() => {
    app.listen(port, async () => {
        console.log(`Server is Fire at http://localhost:${port}`);
    });
}).catch((err) => console.log(err, "Ocorreu um erro ao tentar iniciar o banco de dados"))

