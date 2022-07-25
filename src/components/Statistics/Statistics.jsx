import { StatList } from 'components/StatList/StatList';
import { StatTitle } from 'components/StatTitle/StatTitle';

import css from './Statistics.module.css';

export const Statistics = ({ statistic }) => {
  return (
    <section className={css.statistics}>
      <StatTitle text="Upload stats"></StatTitle>

      <StatList stats={statistic}></StatList>
    </section>
  );
};
