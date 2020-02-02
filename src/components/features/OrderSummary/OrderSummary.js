import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const OrderSummary = (props) => {

  const totalCost = calculateTotal(formatPrice(props.cost), props.options);

  return (
    <div className={styles.component}>
      <h2 className={styles.promoPrice}>Price from: {props.discounted}</h2>
      <p className={styles.standard}>Standard price: {formatPrice(totalCost)}</p>
    </div>
  );
};

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
  discounted: PropTypes.number,
};

export default OrderSummary;
