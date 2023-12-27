import { verifyAccessToken } from "#utils/jwt.js";

export function authenticateUser() {
  return (req, res, next) => {
    try {
      const accessToken = verifyAccessToken(req.session);
      req.body["accessToken"] = accessToken;
      next();
    } catch (err) {
      console.error(err);
      res.status(400).json({});
    }
  };
}
