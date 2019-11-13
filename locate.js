// function mainLocate () {
//   document.getElementsByClassName('pic-main').style.top = document.getElementById('main').style.top;
//   document.getElementsByClassName('pic-main').style.left = document.getElementById('main').style.right;
// }

function itemLocate (name) {
  let picName = "pic-" + String(name);

  document.getElementsByClassName('picName').getBoundingClientRect().top = document.getElementById('name').getBoundingClientRect().top;
  document.getElementsByClassName('picName').getBoundingClientRect().left = document.getElementById('name').getBoundingClientRect().right;
}

// itemLocate(plastics);