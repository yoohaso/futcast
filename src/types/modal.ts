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
