const verified = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (authToken) {
      const token = authToken.split(" ")[2];

      jwt.verify(token, "ThIsIsMySeCrEtKeY", (error, payload) => {
        if (error) {
          res.status(400).json({
            message: "Please check your TOKEN again...!",
          });
        } else {
          req.user = payload;
          next();
        }
      });
    } else {
      res.status(400).json({
        message: "Something is wrong with this TOKEN",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "You don't have right to this operation",
    });
  }
};
module.exports = verified;
