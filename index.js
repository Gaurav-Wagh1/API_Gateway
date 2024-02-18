const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const rateLimit = require("express-rate-limit");
const axios = require("axios");

const { validateAuthentication } = require("./middlewares/middlewares");
const {
  PORT,
  FLIGHT_SERVICE_PATH,
  BOOKING_SERVICE_PATH,
  AUTH_SERVICE_PATH,
} = require("./config/server-config");

const app = express();

// this is a rate limiter which limits the no. of request each machine can hit;
// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   max: 10,
// });

// middlewares;
app.use(morgan("combined"));
// app.use(limiter);

// for authentication
app.use(
  "/authservice",
  createProxyMiddleware({ target: AUTH_SERVICE_PATH, changeOrigin: true })
);

// for flight search;
app.use(
  "/flightsearch",
  createProxyMiddleware({ target: FLIGHT_SERVICE_PATH, changeOrigin: true })
);

// for flight booking
app.use("/bookingservice", validateAuthentication, async (req, res, next) => {
  try {
    await axios.get(`${AUTH_SERVICE_PATH}/authservice/api/v1/isauthenticated`, {
      headers: {
        "x-access-token": req.headers["x-access-token"],
      },
    });
  } catch (error) {
    return res.status(500).json(error.response.data);
  }
  next();
});

app.use(
  "/bookingservice",
  createProxyMiddleware({ target: BOOKING_SERVICE_PATH, changeOrigin: true })
);

app.listen(PORT, async () => {
  console.log(`Server started at port ${PORT}`);
});
