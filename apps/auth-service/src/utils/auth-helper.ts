import { ValidationError } from '../../../../Packages/error-handler';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (
  data: any,
  userType: 'user' | 'seller'
): void => {
  const { name, email, password, phone_number, country } = data;

  if (
    !name ||
    !email ||
    !password ||
    !country ||
    (userType === 'seller' && !phone_number)
  ) {
    throw new ValidationError('Missing required fields!');
  }
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid Email Address!');
  }
};
