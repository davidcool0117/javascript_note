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

// 자바스크립트
// 1. 로드가 되어 졌으면 하는 부분의 영역을 변수에 할당
// 2. 끌고 올 주소를 변수에 할당
// 3. 서버와 상호작용하고 URL에서 데이터를 가져올 수 있게 하는 객체 XMLHttpRequest() 를 변수에 할당
// 4. 서버에 요청을 보내는 open() 메서드 사용
//      open() 메서드 중에서 1)get 2)post 선택 / 보안을 강화할 필요가 없다면 get을 일반적으로 사용 
// 5. 응답받을 형식(responseType) 선택 -> document, json, text, 등등

// 6. 응답받을 문서의 모든 콘텐츠가 로드된 후 발생할 이벤트 (onload=function(){}) 작성
// 7. send() 메서드를 통해 마지막 요청을 해서 화면에 로드(출력)

// jQuery
// 1. $(function(){}) 안에 작성
// 2. $("로드가 되어 졌으면 하는 부분의 영역").load("끌고 올 주소 로드가 되어질 내용")
//      load() 에는 (끌고 올 주소) 와 (로드가 되어질 내용) 을 함께 작성하며 스페이스 바로 구분