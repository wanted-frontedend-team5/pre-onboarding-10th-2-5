const CACHE_KEY_PREFIX = 'cache_';
const CACHE_EXPIRATION_TIME = 60 * 1000; // 1분

export const setCachedData = (key, data) => {
  const timestamp = Date.now();
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  const cacheData = JSON.stringify({ data, timestamp });
  localStorage.setItem(cacheKey, cacheData);
};

export const getCachedData = (key, expirationTime = CACHE_EXPIRATION_TIME) => {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (!cachedData) return null;

  const { data, timestamp } = JSON.parse(cachedData);

  const isExpired = Date.now() > timestamp + expirationTime;
  if (!isExpired) {
    return data;
  }
  localStorage.removeItem(cacheKey);
};
