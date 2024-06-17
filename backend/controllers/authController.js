import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;  // Ensure this matches your environment variable

export const generateToken = (admin) => {
  // Sample payload
  const payload = {
    id: admin._id,  // Replace with the actual admin ID
    email: admin.email
  };

  // Generate token
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  return token;
};
