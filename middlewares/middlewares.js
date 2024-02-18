const validateAuthentication = (req, res, next) => {
  if (!req.headers["x-access-token"]) {
    return res.status(500).json({
      data: {},
      success: false,
      error: "Invalid data",
      message: "Please provide a token in header",
    });
  }
  next();
};

module.exports = { validateAuthentication };
