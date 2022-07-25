import { StatItem } from 'components/StatItem/StatItem';
import PropTypes from 'prop-types';

import css from './StatList.module.css';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatItem
            key={id}
            id={id}
            label={label}
            percentage={percentage}
          ></StatItem>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
