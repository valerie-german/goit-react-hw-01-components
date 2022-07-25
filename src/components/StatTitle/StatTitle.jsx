import PropTypes from 'prop-types';
//import css from './StatTitle.module.css';

export const StatTitle = ({ text }) => {
  return <h2 className="title">{text}</h2>;
};

StatTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
