// JS
// let list1=document.querySelectorAll("#list1>li");
// list1.forEach(function(el,idx){
//     //console.log(el,idx);
//     //classList.add()
//     el.classList.add("a"+idx);
//     el.textContent="aaa"+idx;
// })


// jquery
$(()=>{
    let list1=$("#list1>li");
    list1.each(function(idx,el){
        console.log(list1);
        // el.classList.add("a"+idx);
        // el.textContent="aaa"+idx;

        // $(el).addClass("a"+idx)
        // $(el).text("aaa"+idx)
        $(el).addClass("a"+idx).text("aaa"+idx);
    })
})