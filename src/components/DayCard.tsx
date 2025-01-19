import { css } from '@emotion/react';
import { PrecipitationType, SkyCondition } from '../api/types';
import { getWeatherIconSrc } from '../utils';

type DayCardProps = {
  date: string;
  fieldName: string;
  startTime: string;
  temp?: string;
  skyCondition?: SkyCondition;
  precipitationType?: PrecipitationType;
  precipitationProbability?: string;
};

function DayCard({
  date,
  fieldName,
  startTime,
  temp,
  skyCondition,
  precipitationType,
  precipitationProbability,
}: DayCardProps) {
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
          <span css={css({ display: 'block', fontWeight: 'bold' })}>{date}</span>
          <span
            css={css({
              display: 'block',
              fontSize: '15px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
          >
            {fieldName}
          </span>
          <span css={css({ display: 'block', fontSize: '18px', fontWeight: 'bold' })}>{startTime}</span>
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
          {precipitationProbability ? `강수 확률 ${precipitationProbability}%` : ''}
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
        <img src={skyCondition && precipitationType ? getWeatherIconSrc(skyCondition, precipitationType) : ''} />
        <span css={css({ display: 'block', fontSize: '30px', fontWeight: 'bold' })}>{temp ? `${temp}℃` : ''}</span>
      </div>
    </div>
  );
}

export default DayCard;
