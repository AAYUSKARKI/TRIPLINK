const items = document.querySelectorAll(.item)
let currentindex=0;
function shownext(){
    items[currentindex].classlist.remove('.active');
    currentindex=(currentindex+1)%items.length;
    items[currentindex].classlist.remove('.active');
}
setInterval(shownext,3000);
console.log("aayus");