import Bus from "./Bus";
import ImageLoader from "./ImageLoader";

export class ImageBus {
  constructor() {
    this.bus = new Bus();
    this.loader = new ImageLoader();
  }

  createHandler = (sSrc, fnLoadCb) => nPriority =>
    this.loader.load(sSrc, nPriority).then(fnLoadCb);

  register = (sId, sSrc, fnLoadCb) => {
    this.bus.register(sId, this.createHandler(sSrc, fnLoadCb));
  };

  unregister = sId => this.bus.unregister(sId);

  load = (sId, nPriority) => {
    this.bus.execute(sId, nPriority);
  };
}

export default ImageBus;
