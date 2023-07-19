const carousel = document.querySelector('.carousel');
const carousel = document.querySelector('.slide');
const autosliderdelay= 5000;
let slideIndex=1;
let autosliderInterval;
showslide(slideIndex);
startautoslider();
function showslide(index){
    if(index<1)
    {
        index=slides.length;
    }
    elseif(index>slides.length){
        index=1;
    }
    slides.forEach((slide) =>{
      slide.classlist.remove('active')  
    });
    slides(index-1).classlist.add('active');
    slideIndex=index;
}