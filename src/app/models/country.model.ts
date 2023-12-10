export interface Country {
  area: number;
  capital: Array<string>;
  cca3: string;
  isFavorite?: boolean;
  name: { official: string; common: string };
  population: number;
  region: string;
  unMember: boolean;
  flags: { png: string; svg: string; alt: string };
}
