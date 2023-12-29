import { errorObj } from "#utils/json.js";
import { verifyAccessToken } from "#utils/jwt.js";

export function authenticateUser() {
  return (req, res, next) => {
    try {
      const accessToken = verifyAccessToken(req.session?.accessToken);
      req.body["accessToken"] = accessToken;
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json(errorObj(err));
    }
  };
}
