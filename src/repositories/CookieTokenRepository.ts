export const COOKIE_TOKEN_KEY = 'TOKEN';

const CookieToken = {
  set() {
    document.cookie = `${COOKIE_TOKEN_KEY}=true`;
  },

  remove() {
    document.cookie = `${COOKIE_TOKEN_KEY}=true; max-age=-1`;
  },
};

export default CookieToken;
