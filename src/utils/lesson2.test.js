import { Model } from './lesson2';
import { logger } from './helpers/logger';

describe('Lesson 2', () => {
  describe('test with real functionality', () => {
    beforeEach(() => {
      spyOnLogger();
      model = new Model(logger);
    });
  
    it('logs the set value', () => {
      model.setValue(value1);

      expect(logger.log).toHaveBeenCalledWith(`setting value: ${value1}`);
    });

    it('sets the value', () => {
      model.setValue(value1);

      expect(model.value).toEqual(value1);
    });
  });

  describe('test with mocked functionality', () => {
    beforeEach(() => {
      mockLogger();
      model = createModel();
    });
  
    it('logs the set value', () => {
      model.setValue(value1);

      expect(mockedLogger.log).toHaveBeenCalledWith(`setting value: ${value1}`);
    });

    it('logs multiple values', () => {
      model.setValue(value1);
      model.setValue(value2);

      expect(mockedLogger.log.mock.calls[0]).toEqual([`setting value: ${value1}`]);
      expect(mockedLogger.log.mock.calls[1]).toEqual([`setting value: ${value2}`]);
    })
  });

  describe('mocked return values', () => {
    beforeEach(() => {
      mockDependencies();
      model = createModel();
    });
  
    it('returns a decodable hash for each value', () => {
      model.setValue(value1);
      let hash = model.encode();

      expect(model.decode(hash)).toEqual(value1);

      model.setValue(value2);
      hash = model.encode();

      expect(model.decode(hash)).toEqual(value2);
    });
  });

  describe('#checkHash', () => {
    it('logs if the value has a high hash', () => {});
    it('logs if the value has a low hash', () => {});
  });

  let model;
  let mockedLogger;
  let mockedCrypto;
  const value1 = 'value1';
  const value2 = 'value2';
  const expectedHash1 = 'expectedHash1';
  const expectedHash2 = 'expectedHash2';

  const spyOnLogger = () => {
    jest.spyOn(logger, 'log');
  };

  const mockLogger = () => {
    mockedLogger = {
      log: jest.fn(),
    };
  };

  const mockCrypto = () => {
    const hashes = {
      [expectedHash1]: value1,
      [expectedHash2]: value2,
    };

    mockedCrypto = {
      encode: jest.fn(value => Object.keys(hashes).find(key => hashes[key] === value)),
      decode: jest.fn(hash => hashes[hash]),
    };
  };

  const createModel = () => new Model(mockedLogger, mockedCrypto);

  const mockDependencies = () => {
    mockLogger();
    mockCrypto();
  };
});
