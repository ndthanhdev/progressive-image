const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = reject;
    image.src = src;
  });

export class ImageLoader {
  private readonly loading = new Map<string, Promise<void>>();

  load = async (src: string) => {
    if (this.loading.has(src)) {
      const preloadTask = <Promise<void>>this.loading.get(src);
      await preloadTask;
    } else {
      const preloadTask = preloadImage(src);
      this.loading.set(src, preloadTask);
      await preloadTask;
      this.loading.delete(src);
    }
  };
}

export default ImageLoader;
