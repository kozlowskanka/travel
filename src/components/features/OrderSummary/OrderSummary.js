import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const OrderSummary = (props) => (

  <h2 className={styles.component}>
    {calculateTotal(formatPrice(props.cost), props.options)}
  </h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
