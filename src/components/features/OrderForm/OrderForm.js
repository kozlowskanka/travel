import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => (

  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
