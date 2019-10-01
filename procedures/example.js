const rpc = require('@hamjs/rpc-server');

rpc.def('example', () => {
  return 'this is an example';
});
