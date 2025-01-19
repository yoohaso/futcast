import { PrecipitationType, SkyCondition } from '../api/types';

export function getWeatherIconSrc(skyCondition: SkyCondition, precipitationType: PrecipitationType) {
  const skyConditionIcons: { [key: string]: string } = {
    '1': '01d',
    '3': '02d',
    '4': '03d',
  };

  const precipitationTypeIcons: { [key: string]: string } = {
    '1': '10d',
    '2': '13d',
    '3': '13d',
    '4': '09d',
  };

  const iconCode = precipitationTypeIcons[precipitationType] || skyConditionIcons[skyCondition] || '';
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
