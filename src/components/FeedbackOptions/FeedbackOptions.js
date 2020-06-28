import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.feedback}>
    {options.map(option => (
      <li className={styles.feedback_item} key={option}>
        <button
          className={styles.feedback_btn}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
