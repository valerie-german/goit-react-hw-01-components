import { StatList } from 'components/StatList/StatList';

import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ statistic, text }) => {
  return (
    <section className={css.statistics}>
      {text && <h2 className={css.title}>{text}</h2>}

      <StatList stats={statistic} />
    </section>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
};
