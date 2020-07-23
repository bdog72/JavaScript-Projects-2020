//
//
console.log('Bozo');

const rep = document.querySelectorAll('.copyMe');
const container = document.querySelector('.container');

const garbage = document.querySelector('#garbage');

let holder = {};

rep.forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    holder.obj = element.cloneNode(true);
    holder.obj.style.cursor = 'move';
    holder.obj.classList.add('new');
    holder.obj.style.backgroundColor = ranColor();
    // holder.obj.style.backgroundColor = 'green';
    holder.obj.style.left = element.offsetLeft + 'px';
    holder.obj.style.top = element.offsetTop + 200 + 'px';

    holder.obj.startX = element.offsetLeft;
    holder.obj.startY = element.offsetTop;

    holder.obj.moves = Math.floor(Math.random() * 25);
    holder.obj.int = setInterval(mover, 25);

    function mover() {
      if (holder.obj.moves <= 0) {
        clearInterval(holder.obj.int);
      } else {
        holder.obj.moves--;
        holder.obj.startY += 10;
        holder.obj.startX += 1;
        holder.obj.style.top = holder.obj.startY + 'px';
        holder.obj.style.left = holder.obj.startX + 'px';
      }
    }

    container.appendChild(holder.obj);
    dragger(holder.obj);
  });
  element.style.left = index * 100 + 'px';
});

function ranColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    hex = ('0' + String(hex)).substr(-2);
    return hex;
  }
  return '#' + c() + c() + c();
  // let result = Math.random().toString(16).substr(-6);
  // return `#${result}`;
  // return `#${Math.floor(Math.random()).toString(16).substr(-6)}`;
}

function dragger(el) {
  let pos = {};
  el.onmousedown = dragMouse;

  function dragMouse(e) {
    pos.nx = e.clientX;
    pos.ny = e.clientY;
    document.onmouseup = function () {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    document.onmousemove = function (e) {
      pos.ox = pos.nx - e.clientX;
      pos.oy = pos.ny - e.clientY;

      pos.nx = e.clientX;
      pos.ny = e.clientY;

      if (isCollide(el)) {
        el.onmousedown = null;
        el.parentElement.removeChild(el);
        console.log(`Over Bozo`);
      } else {
        console.log(`Ok`);
      }

      el.style.top = el.offsetTop - pos.oy + 'px';
      el.style.left = el.offsetLeft - pos.ox + 'px';
    };
  }
}

function isCollide(a) {
  let aRect = a.getBoundingClientRect();
  let bRect = garbage.getBoundingClientRect();
  console.log(aRect);
  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
