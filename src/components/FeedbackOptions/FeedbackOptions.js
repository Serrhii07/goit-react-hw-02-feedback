import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback} onClick={onLeaveFeedback}>
    <button className={styles.feedback_btn}>{options[0]}</button>
    <button className={styles.feedback_btn}>{options[1]}</button>
    <button className={styles.feedback_btn}>{options[2]}</button>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
