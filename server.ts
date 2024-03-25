import express, { Application, Request, Response } from 'express';
import { MongoDatabase } from './db/connection';
import { UsuarioRepository } from './db/repositories/usuario-repository';
import { Usuario } from './db/models/usuario';
const app: Application = express();
const port = process.env.PORT || 8000;





MongoDatabase.connect().then(
    () => {
        const userRepository = new UsuarioRepository()

        app.listen(port, async () => {
            console.log(`Server is Fire at http://localhost:${port}`);

            app.post('/usuarios', async (req: Request, res: Response) => {
                try {
                  const usuario = req.body as Usuario;
                
                  const user = await userRepository.create(usuario)
                  res.status(201).json(user);
                } catch (err) {
                  console.error('Erro ao inserir usuário:', err);
                  res.status(500).json({ message: 'Erro ao inserir usuário' });
                }
              });

            app.get('/', async (req: Request, res: Response) => {
                
                await userRepository.create({
                    usu_phone: '123456789',
                    usu_nome: 'Nome do Usuário',
                    usu_email: 'usuario@example.com',
                    usu_cpf: '123.456.789-00',
                    usu_nascimento: new Date('1990-01-01'),
                    usu_conta_ativa: true
                });
                
                res.send('Welcome to Express & TypeScript Server');
            });
        });

        
   
}).catch((err) => console.log(err, "Ocorreu um erro ao tentar iniciar o banco de dados"))

