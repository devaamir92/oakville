export const PriceFormat = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(price);
};
