import { css } from '@emotion/react';
import useMatches from '../hooks/useMatches';
import { useMemo, useState } from 'react';
import useWeather from '../hooks/useWeather';
import DayCard from './DayCard';
import { formatDate, formatTime } from '../utils';
import Modal from './Modal';

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
          <div css={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' })}>
            <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
              <div css={css({ display: 'flex', flexDirection: 'column', gap: '2px' })}>
                <span css={css({ display: 'block', fontWeight: 'bold', fontSize: '20px' })}>신도림 구장</span>
                <span css={css({ display: 'block', fontSize: '15px' })}>10시 시작</span>
                <span css={css({ display: 'block', fontSize: '15px' })}>서울시 구로구 신도림동</span>
              </div>
              <div css={css({ display: 'flex', flexDirection: 'column', gap: '2px' })}>
                <span css={css({ display: 'block', fontSize: '15px' })}>20도</span>
                <span css={css({ display: 'block', fontSize: '15px' })}>강수확률 30%</span>
                <span css={css({ display: 'block', fontSize: '15px' })}>강수량 1mm</span>
              </div>
            </div>
            <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
              <a css={css({ fontSize: '12px' })}>플랩풋볼</a>
              <a css={css({ fontSize: '12px' })}>기상청</a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Board;
