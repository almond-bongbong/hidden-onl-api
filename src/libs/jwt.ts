import jwt from 'jsonwebtoken';

interface Payload {
  id: string;
  name: string;
  role: string;
}

export const createJWT = (payload: Payload): string =>
  jwt.sign(payload, process.env.JWT_SECRET || '', {
    algorithm: 'HS512',
    issuer: 'max.corp',
    expiresIn: '1m',
  });

export const decodeJWT = async (token: string): Promise<Payload | null> => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
    return decoded as Payload;
  } catch (e) {
    return null;
  }
};

export default decodeJWT;
