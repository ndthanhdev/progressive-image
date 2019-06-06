import Bus, { IHandler } from "./Bus";

export class ImageBus {
  private readonly queue: string[] = [];
  private serving: string[] = [];
  private readonly bus = new Bus();

  constructor(public worker: number = 2) {}

  register = (id: string, handler: IHandler) => this.bus.register(id, handler);

  unregister = (id: string) => this.bus.unregister(id);

  private tryServe() {
    if (this.queue.length > 0) {
      if (this.serving.length < this.worker) {
        const next = <string>this.queue.shift();
        this.serving.push(next);
        this.bus.execute(next).then(() => this.bus.unregister(next));
      } else {
        setTimeout(() => {
          this.tryServe();
        }, 0);
      }
    }
  }

  load = (id: string) => {
    this.queue.push(id);
    this.tryServe();
  };
}

export default ImageBus;
