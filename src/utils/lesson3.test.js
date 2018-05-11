import { Model, DEFAULT_QUOTE } from './lesson3';
import { request } from './helpers/request';

jest.mock('./helpers/request', () => ({
  request: jest.fn(),
}));

describe('Lesson 3', () => {
  describe('with promises', () => {
    describe('success response', () => {
      beforeEach(() => {
        givenSuccessRequest();
      });
    
      it('fetches the data', done => {
        model = createModel();
    
        model.fetch().then(() => {
          expect(model.value).toEqual(serverData);
          done();
        });
      });
    });
  
    describe('failure response', () => {
      beforeEach(() => {
        givenFailureRequest();
      });
    
      it('fetches the server error', done => {
        model = createModel();
    
        model.fetch().then(() => {
          expect(model.value).toEqual(serverError);
          done();
        });
      });
    });
  });

  describe('with async/await', () => {
    describe('success response', () => {
      beforeEach(() => {
        givenSuccessRequest();
      });
    
      it('fetches the data', async done => {
        model = createModel();
        
        await model.fetch();

        expect(model.value).toEqual(serverData);
        done();
      });
    });
  
    describe('failure response', () => {
      beforeEach(() => {
        givenFailureRequest();
      });
    
      it('fetches the server error', async done => {
        model = createModel();
    
        await model.fetch();
        
        expect(model.value).toEqual(serverError);
        done();
      });
    });
  });
  
  describe('with returned promise', () => {
    describe('success response', () => {
      beforeEach(() => {
        givenSuccessRequest();
      });
    
      it('fetches the data', () => {
        model = createModel();
    
        return model.fetch().then(() => {
          expect(model.value).toEqual(serverData);
        });
      });
    });
  
    describe('failure response', () => {
      beforeEach(() => {
        givenFailureRequest();
      });
    
      it('fetches the server error', () => {
        model = createModel();
    
        return model.fetch().then(() => {
          expect(model.value).toEqual(serverError);
        });
      });
    });
  });
  
  describe('without async control feedback', () => {
    describe('success response', () => {
      beforeEach(() => {
        givenSuccessRequest();
      });
    
      it('fetches the data', done => {
        model = createModel();
        
        model.fetch();

        setImmediate(() => {
          expect(model.value).toEqual(serverData);
          done();
        });
      });
    });
  
    describe('failure response', () => {
      beforeEach(() => {
        givenFailureRequest();
      });
    
      it('fetches the server error', done => {
        model = createModel();
    
        model.fetch();
        
        setImmediate(() => {
          expect(model.value).toEqual(serverError);
          done();
        });
      });
    });
  });

  describe('#fetchQuote', () => {
    beforeEach(() => {
      model = createModel();
    });

    describe('when request user fails', () => {
      it('stores default quote', async done => {
        givenRequestUserFail();

        await model.fetchQuote(userId);

        expectAsyncDefaultQuoteStored(done)
      });
    });

    describe('when request quote fails', () => {
      it('stores default quote', async done => {
        givenRequestQuoteFail();

        await model.fetchQuote(userId);

        expectAsyncDefaultQuoteStored(done)
      });
    });

    describe('when fetch quote succeeds', () => {
      it('stores returned quote', async done => {
        givenSuccessRequest();

        await model.fetchQuote(userId);

        expectAsyncQuoteResponseStored(done)
      });
    });
  });

  let model;
  const serverData = 'serverData';
  const serverError = 'serverError';
  const userId = 'userId';
  const quoteId = 'quoteId';
  const quoteResponse = 'quoteResponse';

  const createModel = () => new Model();

  const givenSuccessRequest = () => {
    request.mockImplementation(param => {
      if (param === userId) return Promise.resolve(quoteId);
      if (param === quoteId) return Promise.resolve(quoteResponse);

      return Promise.resolve({ data: serverData })
    });
  };

  const givenFailureRequest = () => {
    request.mockImplementation(() => Promise.reject(serverError));
  };

  const givenRequestUserFail = () => {
    request.mockImplementation(() => Promise.reject(serverError));
  };

  const givenRequestQuoteFail = () => {
    request.mockImplementation(param => {
      if (param === userId) return Promise.resolve(quoteId);
      if (param === quoteId) return Promise.reject(serverError);
    });
  };

  const expectAsyncDefaultQuoteStored = done => {
    expect(model.value).toEqual(DEFAULT_QUOTE);
    done();
  }

  const expectAsyncQuoteResponseStored = done => {
    expect(model.value).toEqual(quoteResponse);
    done();
  }
});
