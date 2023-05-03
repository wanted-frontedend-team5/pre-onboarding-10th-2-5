const cachesName = 'SearchKeyword';

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
