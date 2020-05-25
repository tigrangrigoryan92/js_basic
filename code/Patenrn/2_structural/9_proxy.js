function networkFetch(url) {
    return `Answer from ${url}`;
}


const cache = new Set();
const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0];
        if (cache.has(url)) {
            return `${url} - answer from cache`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray);
        }
    }
});

console.log(proxyFetch('google.com'));
console.log(proxyFetch('fb.com'));
console.log(proxyFetch('google.com'));
