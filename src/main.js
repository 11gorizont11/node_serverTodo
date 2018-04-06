import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Boom from 'boom';
import ServerConfig from './serverConfig';

const app = express();

/**
 * Middleware
 */
app.use(bodyParser.json());
app.use(cookieParser());

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
  res
    .status(isBoom ? err.output.statusCode : 500)
    .json(isBoom ? err.output : Boom.wrap(err));
});

app.listen(ServerConfig.PORT, () =>
  console.log(
    `Api server started with ENV ${ServerConfig.ENV} on port: ${
      ServerConfig.PORT
    }!`
  )
);
