import { css } from '@emotion/react';
import { Match } from '../../api/types';
import { formatDate, formatTime } from '../../utils';
import DayCard from '../DayCard';

type StadiumGamesWithWeatherSkeletonProps = {
  matches: Match[];
};

export function StadiumGamesWithWeatherSkeleton({ matches }: StadiumGamesWithWeatherSkeletonProps) {
  const upcomingMatch = matches[0];
  const otherMatches = matches.slice(1, matches.length);

  return (
    <>
      <DayCard
        stadium={{ name: upcomingMatch.field.name }}
        game={{ date: formatDate(upcomingMatch.schedule), startTime: formatTime(upcomingMatch.schedule) }}
      />
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
          return (
            <DayCard
              key={match.id}
              stadium={{ name: match.field.name }}
              game={{ date: formatDate(match.schedule), startTime: formatTime(match.schedule) }}
            />
          );
        })}
      </div>
    </>
  );
}
