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
