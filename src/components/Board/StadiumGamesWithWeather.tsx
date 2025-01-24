import { useMemo, useState } from 'react';
import { Match } from '../../api/types';
import useWeather from '../../hooks/useWeather';
import { formatDate, formatTime } from '../../utils';
import DayCard from '../DayCard';
import { css } from '@emotion/react';
import { StadiumWeatherModal } from '../modal/StadiumWeatherModal';

type ClickableProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function Clickable({ onClick, children }: ClickableProps) {
  return <div onClick={onClick}>{children}</div>;
}

type StadiumGamesWithWeatherProps = {
  matches: Match[];
};

export function StadiumGamesWithWeather({ matches }: StadiumGamesWithWeatherProps) {
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);

  const locations = useMemo(
    () =>
      matches.map(match => ({
        timestamp: match.schedule,
        gridX: match.field.gridX,
        gridY: match.field.gridY,
      })),
    [matches]
  );

  const weather = useWeather({ locations });

  const handleCardClick = (matchId: number) => {
    setSelectedMatchId(matchId);
  };

  const upcomingMatch = matches[0];
  const upcomingMatchWeather = weather[0];
  const otherMatches = matches.slice(1, matches.length);

  return (
    <>
      <Clickable onClick={() => handleCardClick(upcomingMatch.id)}>
        <DayCard
          stadium={{ name: upcomingMatch.field.name }}
          game={{ date: formatDate(upcomingMatch.schedule), startTime: formatTime(upcomingMatch.schedule) }}
          weather={{
            temperature: upcomingMatchWeather.temperature.value,
            skyCondition: upcomingMatchWeather.skyCondition.value,
            precipitationType: upcomingMatchWeather.precipitationType.value,
            precipitationProbability: upcomingMatchWeather.precipitationProbability.value,
          }}
        />
      </Clickable>
      <hr css={css({ width: '100%', margin: '15px 0', border: '1px solid white' })} />
      <div
        css={css({
          width: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
        })}
      >
        {otherMatches.map(match => {
          const matchWeather = weather.find(ele => ele.datetime === match.schedule);

          if (!matchWeather) {
            return (
              <DayCard
                key={match.id}
                stadium={{ name: match.field.name }}
                game={{ date: formatDate(match.schedule), startTime: formatTime(match.schedule) }}
              />
            );
          }

          return (
            <Clickable key={match.id} onClick={() => handleCardClick(match.id)}>
              <DayCard
                stadium={{ name: match.field.name }}
                game={{ date: formatDate(match.schedule), startTime: formatTime(match.schedule) }}
                weather={{
                  temperature: matchWeather.temperature.value,
                  skyCondition: matchWeather.skyCondition.value,
                  precipitationType: matchWeather.precipitationType.value,
                  precipitationProbability: matchWeather.precipitationProbability.value,
                }}
              />
            </Clickable>
          );
        })}
      </div>
      {selectedMatchId && (
        <StadiumWeatherModal
          matchId={selectedMatchId}
          matches={matches}
          weather={weather}
          onClose={() => setSelectedMatchId(null)}
        />
      )}
    </>
  );
}
