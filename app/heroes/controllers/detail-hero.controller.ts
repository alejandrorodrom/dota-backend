import { Request, Response } from "express";

export const detailHeroController = async (req: Request, res: Response) => {
  const heroId = req.params.heroId;

  try {
    res.status(200).json({
      id: heroId,
      name: 'Phanton Assasin',
      attrAgility: 'fuerza xd'
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Ocurrio un error'
    });
  }
}
