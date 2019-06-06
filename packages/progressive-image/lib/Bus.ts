export interface IHandler {
  (...args: any[]): any;
}

export class Bus {
  private readonly map = new Map<string, IHandler>();

  register = (id: string, handler: IHandler) => this.map.set(id, handler);

  unregister = (id: string) => this.map.delete(id);

  execute = async (id: string, ...args: any[]) => {
    const handler = this.map.get(id);
    if (handler) {
      return Promise.resolve().then(() => handler.apply(undefined, args));
    }
    return Promise.resolve();
  };
}

export default Bus;
