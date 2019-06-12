export as namespace iso3166;

interface Subdivision {
  type: string;
  name: string;
}
interface Subdivisions {
  [code: string]: Subdivision;
}
interface Country {
  name: string;
  sub: Subdivisions;
}

export function country(name: string): Country;
export function subdivision(type:string, name: string): Subdivision;

export const data: Subdivisions;
export const codes: Subdivisions;

