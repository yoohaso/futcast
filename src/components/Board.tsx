import { css } from '@emotion/react';
import useMatches from '../hooks/useMatches';
import { useMemo, useState } from 'react';
import useWeather from '../hooks/useWeather';
import DayCard from './DayCard';
import { formatDate, formatTime } from '../utils';
import Modal from './Modal';
import { Clock, CloudRain, Droplets, ExternalLink, MapPin, ThermometerSun } from 'lucide-react';

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
  const upcomitMatchWeather = weather?.[0];
  const otherMatches = matches?.slice(1, matches.length);

  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
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
            <Clickable onClick={handleCardClick}>
              <DayCard
                date={formatDate(upcomingMatch!.schedule)}
                fieldName={upcomingMatch!.field.name}
                startTime={formatTime(upcomingMatch!.schedule)}
                temp={upcomitMatchWeather?.temperature.value}
                skyCondition={upcomitMatchWeather?.skyCondition.value}
                precipitationType={upcomitMatchWeather?.precipitationType.value}
                precipitationProbability={upcomitMatchWeather?.precipitationProbability.value}
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
                const matchWeather = weather?.find(ele => ele.datetime === match.schedule);

                return (
                  <Clickable key={match.id} onClick={handleCardClick}>
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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div css={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
            <div
              css={css({
                display: 'flex',
                height: '100px',
                backgroundColor: '#070c25',
                padding: '15px 10px 20px 15px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              })}
            >
              <div>
                <span css={css({ display: 'block', fontWeight: 'bold', fontSize: '20px', color: '#ffffff' })}>
                  신도림 구장
                </span>
                <div css={css({ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' })}>
                  <Clock color="#ffffff" size={15} />
                  <span css={css({ display: 'block', fontSize: '15px', color: '#ffffff' })}>10시 시작</span>
                </div>
              </div>
              <img
                css={css({ width: '70px', height: '70px' })}
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather_icon"
              />
            </div>
            <div
              css={css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: '#ffffff',
              })}
            >
              <div
                css={css({
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                })}
              >
                <div css={css({ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' })}>
                  <MapPin size={14} />
                  <span css={css({ display: 'block', fontSize: '14px' })}>서울시 구로구 신도림동</span>
                </div>
                <div css={css({ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' })}>
                  <div
                    css={css({
                      display: 'flex',
                      boxSizing: 'border-box',
                      width: '45%',
                      height: '70px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '10px',
                      borderRadius: '8px',
                      gap: '8px',
                      backgroundColor: '#f5f5f5',
                    })}
                  >
                    <div css={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <ThermometerSun size={14} />
                      <span css={css({ display: 'block', fontSize: '12px' })}>기온</span>
                    </div>
                    <span css={css({ display: 'block', fontSize: '17px', fontWeight: 'bold' })}>20도</span>
                  </div>
                  <div
                    css={css({
                      display: 'flex',
                      boxSizing: 'border-box',
                      width: '45%',
                      height: '70px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '10px',
                      borderRadius: '8px',
                      gap: '8px',
                      backgroundColor: '#f5f5f5',
                    })}
                  >
                    <div css={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <CloudRain size={14} />
                      <span css={css({ display: 'block', fontSize: '12px' })}>강수확률</span>
                    </div>
                    <span css={css({ display: 'block', fontSize: '17px', fontWeight: 'bold' })}>30%</span>
                  </div>
                </div>
                <div css={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                  <Droplets size={14} />
                  <span css={css({ display: 'block', fontSize: '14px' })}>강수량 1mm</span>
                </div>
              </div>
              <hr
                css={css({
                  width: '100%',
                  border: 'none',
                  height: '0.5px',
                  backgroundColor: 'black',
                  margin: '20px 0',
                })}
              />
              <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
                <a css={css({ display: 'flex', gap: '5px', alignItems: 'center', fontSize: '14px' })}>
                  플랩풋볼
                  <ExternalLink size={13} />
                </a>
                <a css={css({ display: 'flex', gap: '5px', alignItems: 'center', fontSize: '14px' })}>
                  상세날씨
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Board;
