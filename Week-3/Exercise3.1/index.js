// Given reducer method
function add(a, b) {
  return a + b;
}

//Create a method called memoize such that:
function memoize(add) {
  const cache = {}; // create cache object

  function memoized(...args) {
    const cacheKey = args.join("_"); //create key for cache results

    if (cacheKey in cache) { //check if cacheKey is present in cache
      return cache[cacheKey]; // if present, return result
    }

    const result = args.reduce(add, 0);
    cache[cacheKey] = result;
    return result;
  }
  // method to clear cache after use
  memoized.clearCache = function() {
    Object.keys(cache).forEach((key) => delete cache[key]);
  };

  return memoized;
}

const memoizeAdd = memoize(add);

//then calling
memoizeAdd(100, 100); // returns 200
memoizeAdd(100); // returns 100
memoizeAdd(100, 200); // returns 300
memoizeAdd(100, 100); // returns 200 without computing

memoizeAdd.clearCache();

// - The memoize function accepts the "function add" 
// - A cache object is created to store the results.
// - memoize returns a function memoized that accepts the arguments from add.
// - A cacheKey is created with the received args.
// - When memoizeAdd is called then it calculates the result and assigns the result to cacheKey and returns the result.
// - If cacheKey is found in cache the assigned value is returned without calculation.

//Bonus learning
// - There might be a time when cache is short of space therefore it is best to clear the cache.
