const cachesName = 'SearchKeyword';
const notSearchable = 'NotSearchable';

export const notSearchableStorage = {
  get: () => {
    const res = JSON.parse(localStorage.getItem(notSearchable));
    return res;
  },
  put: keyword => {
    const keywordArray = notSearchableStorage.get();
    if (!keywordArray) {
      localStorage.setItem(notSearchable, JSON.stringify([keyword]));
    } else {
      if (!keywordArray.includes(keyword)) keywordArray.push(keyword);
      localStorage.setItem(notSearchable, JSON.stringify(keywordArray));
    }
  },
};

export const searchCacheStorage = {
  get: () => {
    const res = JSON.parse(localStorage.getItem(cachesName));
    return res;
  },

  put: list => {
    const prevList = searchCacheStorage.get();
    if (!prevList) {
      localStorage.setItem(cachesName, JSON.stringify([list]));
    } else {
      prevList.push(list);
      localStorage.setItem(cachesName, JSON.stringify(prevList));
    }
  },

  delete: () => {
    localStorage.removeItem(cachesName);
  },
};
