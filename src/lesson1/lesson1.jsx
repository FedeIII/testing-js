import React from 'react';
import { priceFormatter } from '../helpers/formatter';

export function Quotes(props) {
  const { lob, price } = props;

  return (
    <div className="quotes">

      <h1>Quotes</h1>

      {(lob && price) && (
        <div className="quote">
          <span>Your quote for {lob}:</span>
          <span>{priceFormatter(price)}</span>
        </div>
      )}

      {(!lob || !price) && (
        <div className="quote">
          Sorry, we couldn't get your quote
        </div>
      )}

    </div>
  );
}
