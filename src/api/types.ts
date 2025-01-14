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

export type Weather = {
  temperature: { category: string; value: string };
  skyCondition: { category: string; value: string };
  precipitationType: { category: string; value: string };
  precipitationProbability: { category: string; value: string };
  precipitation: { category: string; value: string };
  datetime: string;
};
