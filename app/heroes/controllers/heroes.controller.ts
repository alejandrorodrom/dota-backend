import { Request, Response } from "express";
import { HeroAdapter } from "../adapters/hero.adapter";
import { getHeroes } from "../services/heroes.service";
import { HeroOriginalResponse } from "../interfaces/heroes-original-response.interface";

export const heroesController = async (req: Request, res: Response) => {
  try {
    const heroes = await getHeroes();

    res.status(200).json({
      heroes: heroes.map((hero: HeroOriginalResponse) => new HeroAdapter(hero))
    });

  } catch (e) {
    return res.status(404).json({
      message: 'Ocurrio un error',
      error: e
    });
  }
}
