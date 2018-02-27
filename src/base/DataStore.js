// 变量缓存器，方便在不同的类中访问和修改变量
export class DataStore {
    constructor() {
        this.store = new Map();
    }

    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    put(key, value) { // 增加值
        this.store.set(key, value);
        return this;
    }

    get(key) { // 获取值
        return this.store.get(key);
    }

    del(key) { // 删除值
        this.store.delete(key)
    }

    clear() { // 清空
        this.store.clear()
    }
}
