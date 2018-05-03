import { request } from './helpers/request';

const DEFAULT_QUOTE = {
  quote_data: 'quote data',
};

export class Model {
  constructor() {
    this.value = undefined;
  }

  fetch() {
    return request()
      .then(response => {
        this.value = response.data;
      })
      .catch(error => {
        this.value = error;
      });
  }

  fetchQuote(userId) {
    return request(userId)
      .then(quoteId => request(quoteId))
      .catch(() => DEFAULT_QUOTE)
      .then(quote => {
        this.value = quote;
      });
  }
};
