import { getIpInfo } from '@modules/geoip/getIpInfo';

export default class GeoService {
  public async getInfo(ip: string) {
    return getIpInfo(ip);
  }
}
