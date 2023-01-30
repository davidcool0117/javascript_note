let btn1 = document.querySelectorAll("ul>li");
let panel1 = document.querySelectorAll("h3");

for(let k = 0; k<panel1.length; k++){
    panel1[k].style.display ='none';
}

for(let i = 0; i<btn1.length; i++){
    btn1[i].addEventListener('click',function(){
    for(let j = 0; j<panel1.length; j++){
        panel1[j].style.display ='none';
    }
    panel1[i].style.display ='block';
    })
}

