import { StatItem } from 'components/StatItem/StatItem';
import PropTypes from 'prop-types';

export const StatList = ({ stats }) => {
  return (
    <ul className="statList">
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatItem key={id} label={label} percentage={percentage}></StatItem>
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
