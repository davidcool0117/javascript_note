let click_img = document.querySelectorAll('.gallery li a');
let modal_bg = document.getElementById('lightbox-overlay');
let modal_img = document.querySelector('#lightbox-overlay img');


click_img.onclick=function(){
    click_img.forEach((val,idx) => {
        idx = this.getElementIndex
        console.log(idx);
      });
}
