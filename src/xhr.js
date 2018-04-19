import LRU from 'lru-cache';
import axios from 'axios';
import qs from 'querystring';

const resQuestDefaults = {
  method: 'get',
  url: '',
  baseUrl: '',
  cache: null,
};

export default class Xhr {
  /**
   *
   * @param config
   */
  constructor(config) {
    this.defaults = config;
    this.cache    = new LRU(Object.assign({}, config.cache));
  }

  request(config) {
    config         = Object.assign(resQuestDefaults, config);
    const cache    = this.cache;
    const search   = qs.stringify(config.params || config.data);
    const cacheKey = search ? `${config.url}?${search}` : config.url;
    const value    = cache.get(cacheKey);
    if (config.cache) {
      if (value) {
        return Promise.resolve(value);
      } else {
        return axios(config).then(res => {
          if (typeof config.cache.filter === 'function') {
            if (config.cache.filter(res)) {
              cache.set(cacheKey, res);
            }
          } else {
            cache.set(cacheKey, res);
          }
          return res;
        });
      }
    } else {
      return axios(config);
    }
  }
}




