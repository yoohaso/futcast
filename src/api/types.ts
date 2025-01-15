type Base = {
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

type Field = {
  id: number;
  name: string;
  address: string;
  weatherLink: string;
  gridX: number;
  gridY: number;
} & Base;

export type Match = {
  id: number;
  schedule: string;
  plabfootballLink: string | null;
  field: Field;
} & Base;

export type Location = { timestamp: string; gridX: number; gridY: number };

export type SkyCondition = '1' | '3' | '4';
export type PrecipitationType = '0' | '1' | '2' | '3' | '4';

export type Weather = {
  temperature: { category: string; value: string };
  skyCondition: { category: string; value: SkyCondition };
  precipitationType: { category: string; value: PrecipitationType };
  precipitationProbability: { category: string; value: string };
  precipitation: { category: string; value: string };
  datetime: string;
};
