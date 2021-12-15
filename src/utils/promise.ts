export const resolver = <T>(fn: (callback: (value: T) => void) => void) => {
  return new Promise(fn);
};
