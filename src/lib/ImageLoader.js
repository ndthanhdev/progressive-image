import PriorityQueue from "./PriorityQueue";

const SMALL_DELAY = 50;

const preloadImage = sSrc =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = reject;
      image.src = sSrc;
    }, SMALL_DELAY);
  });

const latestFirst = (a, b) => {
  return a - b;
};

export class ImageLoader {
  constructor(worker = 1) {
    this.worker = worker;
    this.queue = new PriorityQueue(latestFirst);
    this.listeners = new Map(); // string -> function[]
    this.loading = new Set(); // string, image srcs which are loading
  }

  _loadOrWait = () => {
    if (this.loading.size < this.worker) {
      const next = this.queue.peek();
      if (next && !this.loading.has(next)) {
        // no one is loading this src
        this.loading.add(next);
        preloadImage(next).then(() => {
          this.listeners.get(next).forEach(fnCb => fnCb());
          this.listeners.delete(next);
          this.loading.delete(next);
        });
      }
    } else {
      setTimeout(() => this._loadOrWait(), SMALL_DELAY);
    }
  };

  load = (sSrc, nPriority) =>
    new Promise((resolve, reject) => {
      this.queue.push(sSrc, nPriority);

      if (this.listeners.has(sSrc)) {
        const aInStockListeners = this.listeners.get(sSrc);
        this.listeners.set(sSrc, [...aInStockListeners, resolve]);
      } else {
        this.listeners.set(sSrc, [resolve]);
      }
      this._loadOrWait();
    });
}

export default ImageLoader;
