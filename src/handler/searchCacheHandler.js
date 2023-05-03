import { getSearchResList } from 'api/search';
import { STATUS_CODE } from 'constant/api/statusCode';
import { SearchCacheService } from 'lib/SearchCacheService';

export const getChangeKeywordList = async keyword => {
  const cacheCheck = SearchCacheService.checkKeyword(keyword);
  if (cacheCheck) return cacheCheck.data;

  const res = await getSearchResList(keyword);
  if (res.status === STATUS_CODE.SEARCH_SUCCESS) {
    if (res.data.length > 0) {
      SearchCacheService.putDataCache(keyword, res.data);
      return res.data;
    }
  }
  return null;
};
