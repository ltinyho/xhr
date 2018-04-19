import {bind} from '../src/utils/utils'

test('测试工具函数', () => {
    class xhr {
        config = {
            method: 'aaa'
        }

        constructor(name) {
            this.name = name;
        }

        static request() {
            return this.config.method;
        }
    }

    class other {
        constructor(config) {
            this.config = config
        }
    }

    const config = {method: 'lzh'}
    const ctx = new other(config)
    const instance = bind(xhr.request, ctx)
    expect(instance()).toBe(config.method)
    expect(instance()).not.toBe("haha")
})

