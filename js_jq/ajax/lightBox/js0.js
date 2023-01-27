let click_img = document.querySelectorAll('.gallery img');
let modal_bg = document.getElementById('lightbox-overlay');
let modal_img = modal_bg.querySelector('img');

for(let i=0; i<click_img.length; i++){
  click_img[i].addEventListener('click',function(){
    let img_src = this.getAttribute('data-lightbox');
    modal_img.setAttribute('src',img_src);
    modal_bg.classList.add('visible');
  })
}

modal_bg.addEventListener('click',function(){
  modal_bg.classList.remove('visible');
})