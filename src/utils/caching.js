const ONE_MINUTE = 1000 * 60;

export const setCache = (key, data) => {
  const value = {
    key,
    data,
    expireTime: Date.now() + ONE_MINUTE,
  };

  localStorage.setItem(key, JSON.stringify(value));
};

export const getCache = key => {
  const cache = localStorage.getItem(key);
  if (!cache) return null;

  const { data, expireTime } = JSON.parse(cache);
  if (Date.now() > expireTime) {
    localStorage.removeItem(key);
  }
  return data;
};
