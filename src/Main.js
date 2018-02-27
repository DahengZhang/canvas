import { DataStore } from './base/DataStore.js'
import { Director } from './Director.js'

// 项目主体文件
export class Main {
    constructor(canvasDom) {
        this.canvas = canvasDom;
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        this.init();
    }

    init() {
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        // 初始化画板
        this.dataStore.canvas.width = window.innerWidth;
        this.dataStore.canvas.height = window.innerHeight;

        // 设置画笔
        this.dataStore
            .put('size', '5')
            .put('color', '#CCCCCC');

        this.director.run();
    }
}
