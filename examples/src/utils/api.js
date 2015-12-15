/**
 * Created by dinhquangtrung on 9/30/15.
 */
import cache from './request-cache';
const $ = window.jQuery;

const api = {
  _log: false,
  extraOptions: {
    // headers: {
    //   'GORUTOKEN': sessionStore.token,
    // },
    type: 'json',
    crossDomain: true,
  },
  log(...args) {
    this._log && console.log('[API]', ...args);
  },
  /**
   * This method return a $.Deferred will resolve when the request is complete (or cache)
   */
  _sendRequest(url, data, method, disableCache) {
    const cacheKey = url + '[' + (data ? JSON.stringify(data) : '') + ']';

    const ajax = () => {
      const options = $.extend({}, {
        data: data,
      }, this.extraOptions, {
        url: url,
        method: method,
      });
      this.log('Request sent: ', cacheKey, options);
      if (this._log) {
        requestLog.add(options);
      }
      return $.ajax(options).then((response) => {
        cache.set(cacheKey, response);
        this.log('Request cached: ' + cacheKey);
        return response;
      });
    };

    if (disableCache) {
      this.log('Request sent without cache: ' + cacheKey);
      return ajax();
    }
    // Use cache
    // Try to get data from cache
    const response = cache.get(cacheKey);
    if (response) {
      this.log('Returning cached request: ' + cacheKey);
      return $.Deferred().resolve(response);
    }

    this.log('Asked for cache but not found, sending request: ' + cacheKey);
    // No cache available
    return ajax();
  },
  get(url, data, disableCache) {
    return this._sendRequest(url, data, 'GET', disableCache);
  },
  /**
   * Post requests never use cache
   */
  post(url, data) {
    return this._sendRequest(url, data, 'POST', true);
  },
  put(url, data) {
    return this._sendRequest(url, data, 'PUT', true);
  },
  delete(url, data) {
    return this._sendRequest(url, data, 'DELETE', true);
  },
  upload(url, formData) {
    return $.ajax({
      url: url,
      type: 'PUT',
      data: formData,
      processData: false,
      contentType: false,
    });
  },
  clearCache(key) {
    cache.clear(key);
  },
};

export default api;
