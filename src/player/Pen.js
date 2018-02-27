import { DataStore } from '../base/DataStore.js'

// 画笔
export class Pen {
   constructor() {
      this.dataStore = DataStore.getInstance();
   }

   draw() {
      // 设置画笔
      this.dataStore.ctx.lineWidth = this.dataStore.get('size'); // 画笔粗细
      this.dataStore.ctx.strokeStyle = this.dataStore.get('color'); // 画笔颜色
      this.dataStore.canvas.addEventListener('touchstart', (e) => { this.touchStart(e) });
      this.dataStore.canvas.addEventListener('touchmove', (e) => { this.touchMove(e) });
   }

   touchStart(e) {
      e.preventDefault();
      const touches = e.changedTouches;
      const x = touches[0].clientX - this.dataStore.canvas.offsetLeft;
      const y = touches[0].clientY - this.dataStore.canvas.offsetTop;
      this.dataStore.ctx.moveTo(x, y);
   }

   touchMove(e) {
      e.preventDefault();
      const touches = e.changedTouches;
      const x = touches[0].clientX - this.dataStore.canvas.offsetLeft;
      const y = touches[0].clientY - this.dataStore.canvas.offsetTop;
      this.dataStore.ctx.lineTo(x, y);
      this.dataStore.ctx.stroke();
      const dataUrl = this.dataStore.canvas.toDataURL('image/png'); // 将图片转换为base64格式
   }
}
