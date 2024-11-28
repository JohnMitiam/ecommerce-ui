export function formatAsCurrency(
  number: number,
  currency = 'CAD',
  locale = 'en-CA'
) {
  return number.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
}
