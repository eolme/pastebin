import { default as isEmail } from 'validator/es/lib/isEmail';

export const validString = (str: unknown): string | null => {
  if (typeof str !== 'string') {
    return null;
  }

  const trim = str.trim();

  if (trim.length === 0) {
    return null;
  }

  return trim;
};

export const validEmail = (email: unknown): string | null => {
  const str = validString(email);

  if (str === null) {
    return null;
  }

  if (!isEmail(str)) {
    return null;
  }

  return str;
};
