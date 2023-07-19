const items = document.querySelectorAll('.item');
let currentindex=0;
function shownext(){
    items[currentindex].classList.remove('active');
    currentindex=(currentindex+1)%items.length;
    items[currentindex].classList.add('active');
}
setInterval(shownext,3000);
let a=10;
console.log(a);