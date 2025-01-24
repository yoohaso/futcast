import { useMemo, useState } from 'react';
import { Match } from '../../api/types';
import useWeather from '../../hooks/useWeather';
import { ModalData } from '../../types/modal';
import { formatDate, formatTime, getWeatherIconSrc } from '../../utils';
import DayCard from '../DayCard';
import { css } from '@emotion/react';
import Modal from '../modal/Modal';
import StadiumWeather from '../modal/StadiumWeather';

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
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

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

  const handleCardClick = (data: ModalData) => {
    setShowModal(true);
    setModalData(data);
  };

  const upcomingMatch = matches[0];
  const upcomingMatchWeather = weather[0];
  const otherMatches = matches.slice(1, matches.length);

  return (
    <>
      <Clickable
        onClick={() =>
          handleCardClick({
            temperature: upcomingMatchWeather.temperature.value,
            precipitation: upcomingMatchWeather.precipitation.value,
            precipitationProbability: upcomingMatchWeather.precipitationProbability.value,
            date: formatDate(upcomingMatch.schedule),
            startTime: formatTime(upcomingMatch.schedule),
            fieldName: upcomingMatch.field.name,
            address: upcomingMatch.field.address,
            plabfootballLink: upcomingMatch.plabfootballLink,
            weatherLink: upcomingMatch.field.weatherLink,
            weatherIconSrc: getWeatherIconSrc(
              upcomingMatchWeather.skyCondition.value,
              upcomingMatchWeather.precipitationType.value
            ),
          })
        }
      >
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
            <Clickable
              key={match.id}
              onClick={() =>
                handleCardClick({
                  temperature: matchWeather.temperature.value,
                  precipitation: matchWeather.precipitation.value,
                  precipitationProbability: matchWeather.precipitationProbability.value,
                  date: formatDate(match.schedule),
                  startTime: formatTime(match.schedule),
                  fieldName: match.field.name,
                  address: match.field.address,
                  plabfootballLink: match.plabfootballLink,
                  weatherLink: match.field.weatherLink,
                  weatherIconSrc: matchWeather
                    ? getWeatherIconSrc(matchWeather.skyCondition.value, matchWeather.precipitationType.value)
                    : '',
                })
              }
            >
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
      {showModal && modalData && (
        <Modal onClose={() => setShowModal(false)}>
          <StadiumWeather
            stadium={{ address: modalData.address, name: modalData.fieldName }}
            game={{ date: modalData.date, startTime: modalData.startTime, gameLink: modalData.plabfootballLink }}
            weather={{
              temperature: modalData.temperature,
              precipitationProbability: modalData.precipitationProbability,
              precipitation: modalData.precipitation,
              weatherLink: modalData.weatherLink,
              weatherIconSrc: modalData.weatherIconSrc,
            }}
          />
        </Modal>
      )}
    </>
  );
}
