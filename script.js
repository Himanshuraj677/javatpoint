let isMobile = false, isVisible = false;

if (window.innerWidth < 900) isMobile = true;
const mobileSideBar = () => {
    if (!isVisible) {
        sideBar.classList.add('mobile-menu');
        content.classList.add('hide');
        bar[0].classList.add('line1');
        bar[1].classList.add('line2');
        bar[2].classList.add('line3');
        isVisible = true;
    }
    else {
        sideBar.classList.remove('mobile-menu');
        content.classList.remove('hide');
        bar[0].classList.remove('line1');
        bar[1].classList.remove('line2');
        bar[2].classList.remove('line3');
        isVisible = false;
    }
}
const hamburg = document.querySelector('.ri-menu');
const sideBar = document.querySelector('.side-menu');
const content = document.querySelector('.main-content');
const bar = document.querySelectorAll('.bar');
hamburg.addEventListener('click', mobileSideBar);
