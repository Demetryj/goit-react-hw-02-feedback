import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {/* className={css.list} */}
        <li>
          <p>Good: {good}</p>
          {/* className={css.text} */}
        </li>
        <li>
          <p>Neutral: {neutral}</p>
          {/* className={css.text} */}
        </li>
        <li>
          <p>Bad: {bad}</p>
          {/* className={css.text} */}
        </li>
        <li>
          <p>Total: {total}</p>
          {/* className={css.text} */}
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
          {/* className={css.text} */}
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
