import { css } from '@emotion/react';
import { PrecipitationType, SkyCondition } from '../api/types';
import { getWeatherIconSrc } from '../utils';

type DayCardProps = {
  stadium: {
    name: string;
  };
  game: {
    date: string;
    startTime: string;
  };
  weather?: {
    temperature: string;
    skyCondition: SkyCondition;
    precipitationType: PrecipitationType;
    precipitationProbability: string;
  };
};

function DayCard({ stadium, game, weather }: DayCardProps) {
  return (
    <div
      css={css({
        width: 'inherit',
        height: '25vh',
        maxHeight: '166px',
        backgroundColor: '#fffff0',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
      })}
    >
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '25px 0',
          flex: 2,
          minWidth: 0,
        })}
      >
        <div css={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
          <span css={css({ display: 'block', fontWeight: 'bold' })}>{game.date}</span>
          <span
            css={css({
              display: 'block',
              fontSize: '15px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
          >
            {stadium.name}
          </span>
          <span css={css({ display: 'block', fontSize: '18px', fontWeight: 'bold' })}>{game.startTime}</span>
        </div>
        <div
          css={css({
            width: '90px',
            height: '30px',
            backgroundColor: '#8cd2ee',
            borderRadius: '12px',
            fontSize: '11px',
            textAlign: 'center',
            alignContent: 'center',
            fontWeight: 'bold',
          })}
        >
          {weather?.precipitationProbability ? `강수 확률 ${weather.precipitationProbability}%` : ''}
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        })}
      >
        <img
          src={
            weather?.skyCondition && weather?.precipitationType
              ? getWeatherIconSrc(weather.skyCondition, weather.precipitationType)
              : ''
          }
        />
        <span css={css({ display: 'block', fontSize: '30px', fontWeight: 'bold' })}>
          {weather?.temperature ? `${weather.temperature}℃` : ''}
        </span>
      </div>
    </div>
  );
}

export default DayCard;
