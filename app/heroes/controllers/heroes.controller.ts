import { Request, Response } from "express";
import { getAllHeroes } from "../repository/heroes.repository";

export const heroesController = async (req: Request, res: Response) => {
  try {
    const heroes = await getAllHeroes();
    res.status(200).json({
      heroes: heroes
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Ocurrio un error'
    });
  }
}
