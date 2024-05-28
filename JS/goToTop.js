const scrollTopBtn = document.querySelector('.go_top_button');


window.addEventListener('scroll', function() {
    // 현재 스크롤 위치 확인
    const scrollpoint = window.scrollY;

    if (scrollpoint > 230) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});

// 버튼 클릭 시 최상단으로 이동
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

