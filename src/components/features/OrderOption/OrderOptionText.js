import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, type, setOptionValue }) => (
  <div>
    <input
      className={styles.input}
      type={type}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  type: PropTypes.string,
  currentValue: PropTypes.string,
};

export default OrderOptionText;
