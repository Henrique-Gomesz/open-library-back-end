import express, { Express, Request, Response , Application } from 'express';
import { MongoDatabase } from './db/connection'
const app: Application = express();
const port = process.env.PORT || 8000;


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, async () => {
    await MongoDatabase.connect()
  console.log(`Server is Fire at http://localhost:${port}`);
});