import PropTypes from 'prop-types';
import css from './StatItem.module.css';

import classNames from 'classnames';

export const StatItem = ({ id, label, percentage }) => {
  return (
    <li className={classNames(css.item)} order={id}>
      <span className="label">{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
