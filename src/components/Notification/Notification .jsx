import PropTypes from 'prop-types';
// import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p>{message}</p>; //className={css.text}
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
