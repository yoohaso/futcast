import { css } from '@emotion/react';
import { PrecipitationType, SkyCondition } from '../api/types';

type DayCardProps = {
  date: string;
  fieldName: string;
  startTime: string;
  temp?: string;
  skyCondition?: SkyCondition;
  precipitationType?: PrecipitationType;
};

function getWeatherIconSrc(skyCondition: SkyCondition, precipitationType: PrecipitationType) {
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

function DayCard({ date, fieldName, startTime, temp, skyCondition, precipitationType }: DayCardProps) {
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
            width: '60px',
            height: '30px',
            backgroundColor: '#facc15',
            textAlign: 'center',
            borderRadius: '12px',
            fontSize: '13px',
            alignContent: 'center',
            fontWeight: 'bold',
          })}
        >
          주의
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
