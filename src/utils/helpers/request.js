const request = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      status: 200,
      data: 'server data',
    }), 500);
  });
};

export { request };
