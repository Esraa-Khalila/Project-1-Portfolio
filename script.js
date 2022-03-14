const textdis = document.getElementById("typing");
const ph = [ "Full-stack developer"];
let i = 0;
let j = 0;
let currph = [];
let isDeleting = false;
function loop() {
  textdis.innerHTML = currph.join("");
  if (i < ph.length) {
    if (j <= ph[i].length) {
    }
    if (!isDeleting && j <= ph[i].length) {
      currph.push(ph[i][j]);
      j++;
    }

    if (isDeleting && j <= ph[i].length) {
      currph.pop(ph[i][j]);
      j--;
    }
    if (j == ph[i].length) {
      isDeleting = true;
    }
    if (isDeleting && j === 0) {
      currph = [];
      isDeleting = false;
      i++;
    }
    if (i == ph.length) {
      i = 0;
    }
  }
  setTimeout(loop, 100);
}

loop();
