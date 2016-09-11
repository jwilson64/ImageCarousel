function prevImg() {
  var imgs = [];
  var nodes = document.getElementsByClassName('lpt-image');
  for (var x = 0; x < nodes.length; x++) {
    imgs.push(nodes[x]);
  }
  var curr = getCurrent(imgs, imgs.length - 1);
  imgs[curr].className = "lpt-image lpt-hidden-image";
  if (curr === 0) {
    imgs[imgs.length - 1].className = "lpt-image lpt-current-image"
  } else {
    imgs[curr - 1].className = "lpt-image lpt-current-image"
  }
}

function nextImg() {
  var imgs = [];
  var nodes = document.getElementsByClassName('lpt-image');
  for (var x = 0; x < nodes.length; x++) {
    imgs.push(nodes[x]);
  }
  var curr = getCurrent(imgs, imgs.length - 1);
  imgs[curr].className = "lpt-image lpt-hidden-image";
  if (curr === imgs.length - 1) {
    imgs[0].className = "lpt-image lpt-current-image"
  } else {
    imgs[curr + 1].className = "lpt-image lpt-current-image"
  }
}

function getCurrent(arr, i) {
  var index = i;
  if (index < 0) {
    return 0;
  }
  if (arr[index].className.indexOf('lpt-current-image') > -1) {
    return index;
  }
  return getCurrent(arr, index - 1);
}

document.getElementById('lpt-left-arrow').addEventListener('click', prevImg, false);
document.getElementById('lpt-right-arrow').addEventListener('click', nextImg, false);
