import { css } from '@emotion/react';
import useMatches from '../hooks/useMatches';
import { useMemo, useState } from 'react';
import useWeather from '../hooks/useWeather';
import DayCard from './DayCard';
import { formatDate, formatTime, getWeatherIconSrc } from '../utils';
import Modal from './modal/Modal';
import StadiumWeather from './modal/StadiumWeather';
import { ModalData } from '../types/modal';

type ClickableProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function Clickable({ onClick, children }: ClickableProps) {
  return <div onClick={onClick}>{children}</div>;
}

function Board() {
  const [matches, isLoading] = useMatches();
  const locations = useMemo(
    () =>
      matches.map(match => ({
        timestamp: match.schedule,
        gridX: match.field.gridX,
        gridY: match.field.gridY,
      })),
    [matches]
  );

  const [weather] = useWeather({ locations });

  const upcomingMatch = matches?.[0];
  const upcomingMatchWeather = weather?.[0];
  const otherMatches = matches?.slice(1, matches.length);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const handleCardClick = (data: ModalData) => {
    setShowModal(true);
    setModalData(data);
  };

  return (
    <>
      <div
        css={css({
          width: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 15px 2vh 15px',
        })}
      >
        <h2 css={css({ padding: '10px 0', fontSize: '1rem', color: '#ffffff' })}>다가오는 매치</h2>
        {!isLoading && (
          <>
            <Clickable
              onClick={() =>
                handleCardClick({
                  temperature: upcomingMatchWeather?.temperature.value,
                  precipitation: upcomingMatchWeather?.precipitation.value,
                  precipitationProbability: upcomingMatchWeather?.precipitationProbability.value,
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
                date={formatDate(upcomingMatch!.schedule)}
                fieldName={upcomingMatch!.field.name}
                startTime={formatTime(upcomingMatch!.schedule)}
                temp={upcomingMatchWeather?.temperature.value}
                skyCondition={upcomingMatchWeather?.skyCondition.value}
                precipitationType={upcomingMatchWeather?.precipitationType.value}
                precipitationProbability={upcomingMatchWeather?.precipitationProbability.value}
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
                      date={formatDate(match.schedule)}
                      fieldName={match.field.name}
                      startTime={formatTime(match.schedule)}
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
                      date={formatDate(match.schedule)}
                      fieldName={match.field.name}
                      startTime={formatTime(match.schedule)}
                      temp={matchWeather?.temperature.value}
                      skyCondition={matchWeather?.skyCondition.value}
                      precipitationType={matchWeather?.precipitationType.value}
                      precipitationProbability={matchWeather?.precipitationProbability.value}
                    />
                  </Clickable>
                );
              })}
            </div>
          </>
        )}
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

export default Board;
