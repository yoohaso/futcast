import { Match, Weather } from '../../api/types';
import { formatDate, formatTime, getWeatherIconSrc } from '../../utils';
import Modal from './Modal';
import StadiumWeather from './StadiumWeather';

type StadiumWeatherModalProps = {
  onClose: () => void;
  matchId: number;
  matches: Match[];
  weather: Weather[];
};

export function StadiumWeatherModal({ onClose, matchId, matches, weather }: StadiumWeatherModalProps) {
  const match = matches.find(match => match.id === matchId);
  const matchWeather = weather.find(weather => weather.datetime === match?.schedule);

  if (!match) {
    console.error('매치를 찾을 수 없습니다.');
    return null;
  }

  if (!matchWeather) {
    console.error('날씨를 찾을 수 없습니다.');
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <StadiumWeather
        stadium={{ address: match.field.address, name: match.field.name }}
        game={{
          date: formatDate(match.schedule),
          startTime: formatTime(match.schedule),
          gameLink: match.plabfootballLink,
        }}
        weather={{
          temperature: matchWeather.temperature.value,
          precipitationProbability: matchWeather.precipitationProbability.value,
          precipitation: matchWeather.precipitation.value,
          weatherLink: match.field.weatherLink,
          weatherIconSrc: getWeatherIconSrc(matchWeather.skyCondition.value, matchWeather.precipitationType.value),
        }}
      />
    </Modal>
  );
}
