import geoip from 'geoip-lite';

export function getIpInfo(ip: string): GeoIp | null {
  return geoip.lookup(ip);
}

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
