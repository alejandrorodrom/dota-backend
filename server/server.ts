import express from 'express';
import { SERVER_PORT } from "../environments/environments";

export default class Server {
  private static _instance: Server;

  app: express.Application;
  port: number;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
  }

  static get instance(): Server {
    return this._instance || (this._instance = new this())
  }

  start(callback: () => void): void {
    this.app.listen(this.port, callback);
  }
}
