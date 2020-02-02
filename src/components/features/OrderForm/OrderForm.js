import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';

import OrderOption from '../OrderOption/OrderOption';
import OrderSummary from '../OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';

import settings from '../../../data/settings';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';


const sendOrder = (options, tripCost, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });

  const { name, contact } = options;

  if (name == '') {
    window.alert('Fill your name');
  }
  else if (contact == '') {
    window.alert('Fill your contact');
  }
};

const OrderForm = ({ tripId, tripCountry, tripCost, options, setOrderOption, discount }) => (

  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} discount={discount}/>
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripCountry)}>Order now!</Button>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripCountry: PropTypes.object,
  discount: PropTypes.number,
};

export default OrderForm;
