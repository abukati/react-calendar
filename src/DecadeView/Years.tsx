import React from 'react';

import TileGroup from '../TileGroup';
import Year from './Year';

import { getBeginOfDecadeYear } from '../shared/dates';
import { tileGroupProps } from '../shared/propTypes';

import type { RangeType } from '../shared/types';

type YearsProps = {
  activeStartDate: Date;
  valueType: RangeType;
} & Omit<React.ComponentProps<typeof Year>, 'classes' | 'date'>;

export default function Years(props: YearsProps) {
  const { activeStartDate } = props;
  const start = getBeginOfDecadeYear(activeStartDate);
  const end = start + 9;

  return (
    <TileGroup
      {...props}
      className="react-calendar__decade-view__years"
      dateTransform={(year) => {
        const date = new Date();
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }}
      dateType="year"
      end={end}
      start={start}
      tile={Year}
    />
  );
}

Years.propTypes = {
  ...tileGroupProps,
};
