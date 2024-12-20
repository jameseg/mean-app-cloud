import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express.js with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// ... other imports
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});
