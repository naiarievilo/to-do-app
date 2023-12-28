import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export function createAccessToken(data) {
  try {
    const accessToken = jwt.sign(data, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    return { accessToken: accessToken };
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: {
        name: err.name,
        cause: err.cause,
        message: err.message,
      },
    });
  }
}

export function verifyAccessToken({ ...accessToken }) {
  try {
    const decodedAccessToken = jwt.verify(accessToken, JWT_SECRET);
    return decodedAccessToken;
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
}
