import { Pen } from './player/Pen.js'

// 导演类
export class Director {
   constructor() {
      this.pen = new Pen();
   }

   static getInstance() {
      if (!Director.instance) {
         Director.instance = new Director();
      }
      return Director.instance;
   }

   run() {
      this.pen.draw();
   }
}
