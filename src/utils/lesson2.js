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

  checkHash() {
    if (this.encode() >= 0.5) {
      this.logger.log(`${this.value} has a high hash`);
    } else {
      this.logger.log(`${this.value} has a low hash`);
    }
  }
};
