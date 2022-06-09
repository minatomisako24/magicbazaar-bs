export const local = {
    set(key: any, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    get(key: any) {
        return JSON.parse(window.localStorage.getItem(key)!)
    },
    removeItem(key: any) {
        window.localStorage.removeItem(key)
    },
    removeAll() {
        window.localStorage.clear()
    },
    getAll() {
        const array = new Array()
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i)
            const value = this.get(key)
            array[i] = {
                'key': key,
                'value': value
            }
        }
        return array
    },
    getLength() {
        return window.localStorage.length
    },
    getForIndex(index: number) {
        return window.localStorage.key(index)
    },
    getKeys() {
        const items = this.getAll()
        const keys = []
        for (let i = 0; i < items.length; i++) {
            keys.push(items[i].key)
        }
        return keys
    }
}