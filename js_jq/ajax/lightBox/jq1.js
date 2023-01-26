let click_img = $('.gallery li a');
let modal_bg = $('#lightbox-overlay');
let modal_img = modal_bg.find('img');

click_img.click(function(){
    let img_src = $(this).find('img').attr('data-lightbox');
    modal_img.attr('src', img_src);
    modal_bg.addClass('visible');
})

modal_bg.click(function(){
    $(this).removeClass('visible');
})

$(document).ready(function() {
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });
});