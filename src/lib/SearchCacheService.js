import { searchCacheStorage } from 'utils/searchLocalUtils';

// const SEARCH_EXPIRE_TIME = 100000;

export const SearchCacheService = {
  checkKeyword(keyword) {
    const cacheArray = searchCacheStorage.get();

    if (!cacheArray) return null;

    const isKeywordInCache = cacheArray.find(res => res.keyword === keyword);

    if (isKeywordInCache) return isKeywordInCache;
    return null;
  },

  putDataCache(keyword, data) {
    searchCacheStorage.put({
      keyword,
      data,
      inputTime: new Date(),
    });
  },

  clearCache() {
    searchCacheStorage.delete();
  },
};
