export interface Country {
  area: number;
  capital: ReadonlyArray<string>;
  name: { official: string; common: string };
  population: number;
  region: string;
  unMember: boolean;
}
