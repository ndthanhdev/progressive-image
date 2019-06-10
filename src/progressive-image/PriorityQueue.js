export function defaultCompareFunction() {
  return 0;
}

export class PriorityQueue {
  constructor(compareFunction = defaultCompareFunction) {
    this.queue = new Map(); // string -> number, key -> priority
    this.compareFunc = compareFunction;
  }

  push(sKey, aPriority) {
    this.queue.set(sKey, aPriority);
  }

  peek() {
    let interator = this.queue.entries();
    let { value, done } = interator.next();
    if (value) {
      let best = value[0];

      for (
        { value, done } = interator.next();
        !done;
        { value, done } = interator.next()
      ) {
        if (this.compareFunc(value[1], this.queue.get(best)) > 0) {
          best = value[0];
        }
      }

      this.queue.delete(best);
      return best;
    } else {
      return undefined;
    }
  }

  get length() {
    return Array.from(this.queue.keys()).length;
  }
}

export default PriorityQueue;
