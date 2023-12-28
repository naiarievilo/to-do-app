import { verifyAccessToken } from "#utils/jwt.js";

export function authenticateUser() {
  return (req, res, next) => {
    try {
      const accessToken = verifyAccessToken(req.session?.accessToken);
      req.body["accessToken"] = accessToken;
      next();
    } catch (err) {
      console.error(err);
      res.status(400).json({
        error: {
          name: err.name,
          cause: err.cause,
          message: err.message,
        },
      });
    }
  };
}
