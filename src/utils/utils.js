export function bind(fn, thisArg) {
    return function wrap() {
        const args = [].slice.call(arguments)
        return fn.apply(thisArg, args)
    }
}