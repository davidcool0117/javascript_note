//getUltraSrtNcst(초단기실황),getVilageFcst(단기예보)
let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"; /*URL*/
let params = {
    type:['getUltraSrtNcst','getVilageFcst'],//(초단기실황)(단기예보)
    key:"3NVhpSRT0O0siIH2KcrZSpgHjLx5mrRimZu1GnMr6XORd6Oy%2B7AtFpfp3OOYpjtq5WRWfhSrnKNmvhy9ZdnVjQ%3D%3D",
    pageNo:'1',
    numOfRows:'1000',
    dataType:'JSON',
    base_date:now,
    base_time:'0600',
    nx:'73',
    ny:'134',
}

url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`

console.log(url);


async function getPosts(){
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

setPosts();
async function setPosts(){
    const posts = await getPosts();
    console.log(posts);
    const datas = posts.response.body.items.item;
    datas.forEach(data => {
        const postEl=document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML=`
        <h2 class="post-title">카테고리: ${data.category}</h2>
        <div class="area">지역: 강남</div>
        <div class="number">측정시간: ${data.baseTime}</div>
        <div class="post-body">측정값: ${data.obsrValue}</div>
        `;
        document.body.appendChild(postEl);
    });
}