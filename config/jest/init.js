const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

function itAsync(msg, cb) {
  const originalIt = this;
  async function asyncCb(done) {
    try {
      await cb(done);
    } catch (e) {
      done.fail(e);
    }
    done();
  }
  
  originalIt(msg, asyncCb);
}

it.async = itAsync;
