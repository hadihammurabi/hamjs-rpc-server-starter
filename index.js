const fs = require('fs');
const path = require('path');
const rpc = require('@hamjs/rpc-server');
require('dotenv').config();

const PROCEDURE_DIR = process.env.PROCEDURE_DIR || 'procedures';
const PORT = process.env.PORT || 8080;

if (fs.existsSync(PROCEDURE_DIR)) {
  let files = fs.readdirSync(PROCEDURE_DIR);
  files = files.filter(f => path.extname(f) === '.js' && path.basename(__filename) !== f);
  
  files.forEach(f => {
    require(`./${PROCEDURE_DIR}/${f}`)(rpc);
  });
} else {
  throw `Procedure dir "${PROCEDURE_DIR}" is doesn't exists`;
}

rpc.listen(PORT, () => {
  console.log(`RPC server is running on ${PORT}`);
});
