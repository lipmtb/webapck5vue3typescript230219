export const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;

export const getRandomImg = (width = 200, height = 200) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = getRandomColor();
    ctx.rect(0, 0, width, height);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    const url=canvas.toDataURL();
    return url;
    
  }
  return "";
};
