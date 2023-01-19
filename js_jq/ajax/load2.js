addEventListener("DOMContentLoaded", ()=>{
    let book1 =document.querySelector("#book1")
    let book2 =document.querySelector("#book2")
    const url2 = "book.html";
    let request2 = new XMLHttpRequest();
    request2.open("GET", url2);
    request2.responseType = "document";

    request2.onload = () => {
        let response2 = request2.response;
        let ids2 = response2.querySelectorAll("[id]")
        book1.innerHTML = ids2[0].innerText;
        book2.innerHTML = ids2[1].innerText;
    };
    request2.send();
})