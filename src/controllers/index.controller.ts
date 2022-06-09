import { NextFunction, Request, Response } from 'express';
import GeoService from '@services/geo.service';

class IndexController {
  private _geoService = new GeoService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ip = req.ip;
      const info = await this._geoService.getInfo(ip);
      const response = {
        ip,
        geo: info,
        timezoneOffset: new Date().getTimezoneOffset()
      }
      return res.send(response);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
