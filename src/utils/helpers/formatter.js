export const currencyFormater = price =>
  price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
