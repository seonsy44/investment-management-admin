const TOKEN_KEY = 'TOKEN';

const LocalToken = {
  save(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  get() {
    return localStorage.getItem(TOKEN_KEY) || '';
  },

  remove() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default LocalToken;
