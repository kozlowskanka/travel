import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import { promoPrice } from '../../../utils/promoPrice';

const OrderSummary = (props) => {

  const totalCost = calculateTotal(formatPrice(props.cost), props.options);
  const discountedCost = promoPrice(totalCost,props.discount);

  return (
    <div className={styles.component}>
      <h2 className={styles.promoPrice}>Price from: {formatPrice(discountedCost)}</h2>
      <p className={styles.standard}>Standard price: {formatPrice(totalCost)}</p>
    </div>
  );
};

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
  discount: PropTypes.number,
};

export default OrderSummary;
