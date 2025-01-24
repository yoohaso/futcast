import { fetchWeather } from '../api/weather';
import { Location, Weather } from '../api/types';

type UseWeatherProps = {
  locations: Location[];
};

let weatherData: Weather[] | null = null;
let weatherError: Error | null = null;
let weatherPromise: Promise<void> | null = null;

function useWeather({ locations }: UseWeatherProps): Weather[] {
  if (weatherError) {
    throw weatherError;
  }

  if (!weatherData) {
    if (!weatherPromise) {
      weatherPromise = fetchWeather({ locations })
        .then(data => {
          weatherData = data;
          weatherPromise = null;
        })
        .catch(error => {
          weatherError = error;
          weatherPromise = null;
        });
    }

    throw weatherPromise;
  }

  return weatherData;
}

export default useWeather;
