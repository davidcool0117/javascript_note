/**/
// addEventListener("load",function(){
//     var bt=document.querySelector("h1").nextElementSibling;
//      bt.style.cursor="pointer";

//     bt.onclick=function(){
//     //    document.querySelector("h1").className="red";
//     //    document.querySelector("h1").classList.remove('orange','class');
//        document.querySelector("h1").classList.toggle('toggle');
//        document.querySelector("h1").classList.replace('orange','red');
//     }
//     document.querySelector("h1").classList.add('bg-orange','orange','class');


//     document.querySelector("h1").nextElementSibling.classList.add("red");
//     document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");
//     document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red");
//   })

$(function () {
    var bt=$("h1").next().next().next();
    bt.css("cursor","pointer");
    bt.click(function(){
        if($(this).hasClass("red")){
            $(this).removeClass("bg-orange");
            $(this).addClass("orange");
        }
        $("h1").toggleClass("bg-orange")
    })
    $("h1").next().addClass("red");//클래스 추가
    $("h1").addClass("red").removeClass("red");//클래스 삭제
    $("h1").next().next().addClass("orange");
    $("h1").next().next().next().addClass("bg-orange white red");
})