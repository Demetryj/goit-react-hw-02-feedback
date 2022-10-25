import PropTypes from 'prop-types';
// import css from './Container.module.css';

export const Container = ({ children }) => {
  return <div>{children}</div>; //clcassName={css.container}
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired),
};
