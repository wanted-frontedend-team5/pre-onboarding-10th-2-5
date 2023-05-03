import {
  notSearchableStorage,
  searchCacheStorage,
} from 'utils/searchLocalUtils';

// const SEARCH_EXPIRE_TIME = 100000;

export const SearchCacheService = {
  checkKeyword(keyword) {
    const cacheArray = searchCacheStorage.get();
    const notSeachableArray = notSearchableStorage.get();

    if (!cacheArray || !notSeachableArray)
      return { result: 'fail', reFetch: true };

    if (notSeachableArray.includes(keyword))
      return { result: 'fail', reFetch: false };

    const isKeywordInCache = cacheArray.find(res => res.keyword === keyword);

    if (isKeywordInCache)
      return { result: 'success', reFetch: false, data: isKeywordInCache.data };

    return { result: 'fail', reFetch: true };
  },

  putDataCache(keyword, data) {
    searchCacheStorage.put({
      keyword,
      data,
      inputTime: new Date(),
    });
  },

  putNotSearchableKeyword(keyword) {
    notSearchableStorage.put(keyword);
  },

  clearCache() {
    searchCacheStorage.delete();
  },
};
