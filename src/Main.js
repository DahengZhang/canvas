import { DataStore } from './base/DataStore.js'

// 项目主体文件
export class Main {
    constructor(canvasDom) {
        this.canvas = canvasDom;
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.init();
    }

    init() {
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.canvas.width = '375';
        this.dataStore.canvas.height = '667';
        this.dataStore.ctx.fillStyle = '#FF0000';
        this.dataStore.ctx.fillRect(0, 0, 150, 75);
    }
}
