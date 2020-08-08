import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const connections = await db('connections').count('* as total');

    const { total } = connections[0];

    return res.json({totalConnections: total})
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;


    try{
      await db('connections').insert({ user_id });

      return res.status(201).send();
      
    } catch(err) {
      return res.status(400).json({
        error: 'Unexpected error while creating a new connection'
      });
    }

  }
}