const crypto = {
  encode(value) {
    const encoded = Math.random();
    this.values[encoded] = value;
    return encoded;
  },

  decode(hash) {
    return this.values[hash];
  },

  values: {},
};

export { crypto };
