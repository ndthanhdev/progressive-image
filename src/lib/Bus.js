export class Bus {
  constructor() {
    this.map = new Map(); // string -> fn
  }

  register = (sId, fnHandler) => {
    this.map.set(sId, fnHandler);
  };

  unregister = sId => this.map.delete(sId);

  execute = async (sId, ...args) => {
    const handler = this.map.get(sId);
    if (handler) {
      return Promise.resolve().then(() => handler.apply(undefined, args));
    }
    return Promise.resolve();
  };
}

export default Bus;
