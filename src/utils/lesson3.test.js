import "babel-polyfill";
import { Model } from './lesson3';
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

  describe('#fetchQuote', () => {});

  let model;
  const serverData = 'serverData';
  const serverError = 'serverError';

  const createModel = () => new Model();

  const givenSuccessRequest = () => {
    request.mockImplementation(() => Promise.resolve({ data: serverData }));
  };

  const givenFailureRequest = () => {
    request.mockImplementation(() => Promise.reject(serverError));
  };
});
