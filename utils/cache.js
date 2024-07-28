const saveToCache = (key, value) => {
  if (typeof window != "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const loadFromCache = (key) => {
  if (typeof window != "undefined") {
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
  }

  return null;
};

export { saveToCache, loadFromCache };