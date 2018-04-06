'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _serverConfig = require('./serverConfig');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

/**
 * Middleware
 */
app.use(_bodyParser2.default.json());
app.use((0, _cookieParser2.default)());

// Auntetification check
// Here should be verification

/**
 * Routes
 */
app.get('/api', (req, res) => res.send('Hello World!'));

// catch all errors here
app.use((err, req, res) => {
  const { isBoom } = err;
  if (err.message !== 'Unauthorized') {
    console.error(err);
  }
  res.status(isBoom ? err.output.statusCode : 500).json(isBoom ? err.output : _boom2.default.wrap(err));
});

app.listen(_serverConfig2.default.PORT, () => console.log(`Api server started with ENV ${_serverConfig2.default.ENV} on port:  ${_serverConfig2.default.PORT}!`));
//# sourceMappingURL=main.js.map