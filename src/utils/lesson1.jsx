import React from 'react';
import { currencyFormater } from './helpers/formatter';

export function Quotes(props) {
  const { lob, price } = props;

  return (
    <div className="quotes">

      <h1>Quotes</h1>

      {(lob && price) && (
        <div className="quote">
          <span>Your quote for {lob}:</span>
          <span>{currencyFormater(price)}</span>
        </div>
      )}

      {(!lob || !price) && (
        <div className="quote">
          Sorry, we could not get your quote
        </div>
      )}

    </div>
  );
}
