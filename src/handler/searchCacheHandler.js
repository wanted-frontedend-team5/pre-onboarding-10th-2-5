import { getSearchResList } from 'api/search';
import { STATUS_CODE } from 'constant/api/statusCode';
import { SearchCacheService } from 'lib/SearchCacheService';

export const getChangeKeywordList = async keyword => {
  const cacheCheck = SearchCacheService.checkKeyword(keyword);
  if (cacheCheck.result === 'success') return cacheCheck.data;

  if (!cacheCheck.reFetch) return [];

  const res = await getSearchResList(keyword);
  if (res.status === STATUS_CODE.SEARCH_SUCCESS) {
    if (res.data.length > 0) {
      SearchCacheService.putDataCache(keyword, res.data);
      return res.data;
    }
    SearchCacheService.putNotSearchableKeyword(keyword);
    return [];
  }
  return null;
};
