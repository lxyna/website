// code credit: https://pastebin.com/cYaZamTx

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const imgurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png";
    const size = [20, 30];

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    const getSize = () => rand(size[0], size[1]);

    const lerp = (a, b, f) => (b - a) * f + a;

    const heart = (x, y) => {
      const s = getSize();
      x -= s / 2;
      y -= s / 2;
      x = Math.floor(x) + rand(-5, 5);
      y = Math.floor(y) + rand(-5, 5);
      const fx = x + rand(-40, 40);
      const fy = y + rand(-40, 40);
      const i = document.createElement("img");
      i.src = imgurl;
      i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
      document.body.appendChild(i);
      let f = 0;
      const interval = setInterval(() => {
        const _x = Math.floor(lerp(x, fx, f));
        const _y = Math.floor(lerp(y, fy, f));
        i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
        i.style.opacity = 1 - f;
        f += 0.01;
        if (f > 1) {
          clearInterval(interval);
          document.body.removeChild(i);
        }
      }, 10);
    };

    const bro = (x, y) => {
      for (let i = 0; i < 5; i++) {
        heart(x, y);
      }
    };

    const handleClick = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      bro(x, y);
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CustomCursor;
