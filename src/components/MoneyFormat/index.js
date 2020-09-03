import React, { memo } from 'react';

const MoneyFormat = memo(({ price }) => {
  return <>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(price))}</>;
});

export function MoneyFormatFunc(price) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(price));
}

export default MoneyFormat;
