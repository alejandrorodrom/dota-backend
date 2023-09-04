import { getAllHeroes } from "../repository/heroes.repository";

export const getHeroes = async () => {
  const heroes = await getAllHeroes();

  if (!heroes) {
    throw new Error('No se encontró heroes')
  }

  return heroes;
}
