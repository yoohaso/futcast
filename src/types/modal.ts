export type ModalData = {
  temperature: string;
  precipitationProbability: string;
  precipitation: string;
  date: string;
  startTime: string;
  address: string;
  weatherIconSrc: string;
  plabfootballLink: string | null;
  weatherLink: string;
  fieldName: string;
};

export type StadiumInfo = {
  address: string;
  name: string;
};

export type GameInfo = {
  date: string;
  startTime: string;
  gameLink: string | null;
};

export type WeatherInfo = {
  temperature: string;
  precipitationProbability: string;
  precipitation: string;
  weatherLink: string;
  weatherIconSrc: string;
};
