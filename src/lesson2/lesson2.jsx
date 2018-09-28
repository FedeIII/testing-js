import React, { Component } from 'react';
import { currencyFormater } from '../helpers/formatter';
import { validateEmail } from '../helpers/validations';

export class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = event => {
    const { target: { value } } = event;

    this.setState({ email });
  };

  onSubmit = event => {
    const { sendQuote } = this.props;
    const { email } = this.state;

    event.preventDefault();

    if (validateEmail(email)) {
      sendQuote();
    }
  };

  render() {
    const { lob, price } = this.props;
    const { email } = this.state;

    return (
      <div className="quotes">

      <h1>Quotes</h1>

      {(lob && price) && (
        <div className="quote">
          <span>Your quote for {lob}:</span>
          <span>{currencyFormater(price)}</span>
          <form onSubmit={this.onSubmit}>
            <input type="email" value={email} onChange={this.handleChange}/>
            <button type="submit">
              Send Quote
            </button>
          </form>
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
}
