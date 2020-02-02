export const promoPrice = (price, discount) => {

  if (price == null || discount == null) {
    return null;
  }
  else if (isNaN(price) || isNaN(discount)) {
    return null;
  }
  else if (price <0 || discount < 0) {
    return null;
  }
  else {
    return price * (100-discount)/100;
  }
};
