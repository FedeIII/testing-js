export class Model {
  constructor(logger, crypto, value) {
    this.logger = logger;
    this.crypto = crypto;
    this.value = value;
  }

  setValue(value) {
    this.logger.log(`setting value: ${value}`);
    this.value = value;
  }

  encode() {
    return this.crypto.encode(this.value);
  }

  decode(hash) {
    return this.crypto.decode(hash);
  }
};
