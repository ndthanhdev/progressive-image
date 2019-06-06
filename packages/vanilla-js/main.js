const placeHolder = "./place-holder.svg";

function preloadImage(src) {
  let image = new Image();
  image.src = placeHolder;
  document.body.appendChild(image);

  let loader = new Image();
  loader.onload = () => {
    image.src = src;
    loader = undefined;
  };
  loader.src = src;
}
