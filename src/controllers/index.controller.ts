import { NextFunction, Request, Response } from 'express';
import GeoService from '@services/geo.service';
import requestIp from 'request-ip';

class IndexController {
  private _geoService = new GeoService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientIp: string = requestIp.getClientIp(req);
      const info = await this._geoService.getInfo(clientIp);
      const response = {
        ip: clientIp,
        geo: info,
        timezoneOffset: new Date().getTimezoneOffset(),
      };
      return res.send(response);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
