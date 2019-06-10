const { readdir } = require("fs");
const { promisify } = require("util");

(async () => {
  const readdirAsync = promisify(readdir);
  const paths = await readdirAsync("../../public/fixtures");
  // console.log(paths);
  const urls = paths.map(
    src => `sqip -o "./lqip/${src.replace(".jpg", ".svg")}" "./fixtures/${src}"`
  );
  console.log(urls.join("\n"));
})();
