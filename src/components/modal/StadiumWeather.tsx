import { css } from '@emotion/react';
import { Clock, CloudRain, Droplets, ExternalLink, MapPin, ThermometerSun } from 'lucide-react';
import { GameInfo, StadiumInfo, WeatherInfo } from '../../types/modal';

type StadiumWeatherProps = {
  stadium: StadiumInfo;
  game: GameInfo;
  weather: WeatherInfo;
};

function StadiumWeather({ stadium, game, weather }: StadiumWeatherProps) {
  return (
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
            {stadium.name}
          </span>
          <div css={css({ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' })}>
            <Clock color="#ffffff" size={15} />
            <span css={css({ display: 'block', fontSize: '15px', color: '#ffffff' })}>{`${game.startTime} 시작`}</span>
          </div>
        </div>
        <img css={css({ width: '70px', height: '70px' })} src={weather.weatherIconSrc} alt="weather_icon" />
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
            <span css={css({ display: 'block', fontSize: '14px' })}>{stadium.address}</span>
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
              <span
                css={css({ display: 'block', fontSize: '17px', fontWeight: 'bold' })}
              >{`${weather.temperature}도`}</span>
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
              <span
                css={css({ display: 'block', fontSize: '17px', fontWeight: 'bold' })}
              >{`${weather.precipitationProbability}%`}</span>
            </div>
          </div>
          <div css={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
            <Droplets size={14} />
            <span css={css({ display: 'block', fontSize: '14px' })}>{`강수량 ${weather.precipitation}mm`}</span>
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
          {game.gameLink && (
            <a
              css={css({
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontSize: '14px',
                textDecoration: 'none',
                color: '#000000',
                '&:visited': { color: '#2f2121' },
              })}
              href={game.gameLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              플랩풋볼
              <ExternalLink size={13} />
            </a>
          )}
          <a
            css={css({
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              fontSize: '14px',
              textDecoration: 'none',
              color: '#000000',
              '&:visited': { color: '#2f2121' },
            })}
            href={weather.weatherLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            상세날씨
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default StadiumWeather;
