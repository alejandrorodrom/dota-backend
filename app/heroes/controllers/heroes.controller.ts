import { Request, Response } from "express";

export const heroesController = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      heroes: [
        {
          id: '1',
          name: 'Phanton Assasin'
        }
      ]
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Ocurrio un error'
    });
  }
}
