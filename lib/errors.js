'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on potcore-p2p Module {0}'
};

module.exports = require('potcore-lib').errors.extend(spec);
