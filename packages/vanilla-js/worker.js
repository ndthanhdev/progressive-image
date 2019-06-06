onmessage = ({ data }) => {
  fetch(data).then(() => postMessage(data));
};
