import LRU from 'lru-cache'
import axios from 'axios'
import qs from 'querystring'

export default class Xhr {
    config = {}
    cache = {}
    static default_LRU_CONFIG = {
        max: 500,
        length: function (n, key) {
            return n * 2 + key.length
        },
        dispose: function (key, n) {
            n.close()
        },
        maxAge: 1000 * 60 * 60
    }

    /**
     *
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.cache = new LRU(Object.assign({}, this.default_LRU_CONFIG, config.lruOpts));
    }

    init() {

    }


    xhr(config) {
        const cache = this.cache
        const opt = Object.assign({}, this.config.xhrOpts, config)
        const search = qs.stringify(opt.params || opt.data)
        const cacheKey = search ? `${opt.url}?${search}` : opt.url
        const value = cache.get(cacheKey);
        if (opt.cache && value) {
            return Promise.resolve(value);
        }


        if (opt.cache) {
            if (opt.cache.filter) {
                if (opt.cache.filter(data)) {
                    this.cache.set(cacheKey, data);
                }
            } else {
                this.cache.set(cacheKey, data);
            }
        }
        return axios(config)
    }

}
