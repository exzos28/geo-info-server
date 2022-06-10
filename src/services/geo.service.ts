import geoip from 'geoip-lite';

export type GeoIp = {
  range: number[];
  country: string;
  region: string;
  eu: string;
  timezone: string;
  city: string;
  ll: [number, number];
  metro: number;
  area: number;
};

export default class GeoService {
  private static _getIpInfo(ip: string): GeoIp | null {
    return geoip.lookup(ip);
  }

  public async getInfo(ip: string) {
    return GeoService._getIpInfo(ip);
  }
}
