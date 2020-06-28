import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback} onClick={onLeaveFeedback}>
    <button className={styles.feedback_btn} type="button">
      {options[0]}
    </button>
    <button className={styles.feedback_btn} type="button">
      {options[1]}
    </button>
    <button className={styles.feedback_btn} type="button">
      {options[2]}
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
