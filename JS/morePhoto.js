const listPic = document.querySelector('.main_img_section_img');
const btn = document.querySelector('.main_img_section_button');
let pageToPatch = 1;


btn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

async function fetchImages(page){
    try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);

        if(!response.ok){
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        // 제이슨 데이터를 자바스크립트 객체로 바꾸는 것
        const datas = await response.json();
        makeImageList(datas);

    }catch(error){
        console.error(error);
    }
}

function makeImageList(datas){
    datas.forEach((data)=>{
        listPic.insertAdjacentHTML('beforeend', `<li class="img-width"><img src="${data.download_url}" alt=""></li>`);
    });
}