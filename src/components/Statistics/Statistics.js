import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.stats}>
    <li className={styles.stats_item}>Good: {good} </li>
    <li className={styles.stats_item}>Neutral: {neutral}</li>
    <li className={styles.stats_item}>Bad: {bad}</li>
    <li className={styles.stats_item}>Total: {total}</li>
    <li className={styles.stats_item}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
