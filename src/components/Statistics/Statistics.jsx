//import PropTypes from 'prop-types';
//import css from './Statistics.module.css';
import { StatList } from 'components/StatList/StatList';
import { StatTitle } from 'components/StatTitle/StatTitle';

export const Statistics = ({ statistic }) => {
  return (
    <section className="statistics">
      <StatTitle text="Upload stats"></StatTitle>

      <StatList stats={statistic}></StatList>
    </section>
  );
};
