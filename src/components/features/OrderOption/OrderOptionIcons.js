import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, setOptionValue, currentValue, required }) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div
        onClick={() => setOptionValue('')}
      >
        <Icon name={'times-circle'}></Icon> none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon, value.id === currentValue ? styles.iconActive : ''}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  icon: PropTypes.node,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.node,
};
export default OrderOptionIcons;
