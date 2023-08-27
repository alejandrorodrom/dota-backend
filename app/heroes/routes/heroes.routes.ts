import { Router } from "express";
import { heroesController } from "../controllers/heroes.controller";
import { detailHeroController } from "../controllers/detail-hero.controller";

export const heroesRoutes: Router = Router();

heroesRoutes.get('/', heroesController); // List heroes
heroesRoutes.get('/:heroId', detailHeroController); // Detail hero
export const HERO_ROUTE: string = '/hero/v1';
