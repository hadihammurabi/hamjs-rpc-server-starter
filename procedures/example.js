module.exports = (rpc) => {

  rpc.def('hitung', (a, b) => {
    return `hasil: ${a+b}`;
  });

};
