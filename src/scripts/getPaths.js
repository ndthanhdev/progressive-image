const { readdir } = require("fs");
const { promisify } = require("util");

(async () => {
  const readdirAsync = promisify(readdir);
  const paths = await readdirAsync("../../public/fixtures");
  // console.log(paths);
  const urls = paths.map(src => ({
    src: `./fixtures/${src}`,
    lqip: `./lqip/${src.replace(".jpg", ".svg")}`
  }));
  console.log(urls);
})();
