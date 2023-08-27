import Server from './server/server';
import cors from 'cors';
import { HERO_ROUTE, heroesRoutes } from "./app/heroes/routes/heroes.routes";

const server = Server.instance;

server.app.use(cors({ origin: true, credentials: true }));

server.app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Ok',
    message: 'Dota 2 Operativo'
  });
});

server.app.use(HERO_ROUTE, heroesRoutes);

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
})
