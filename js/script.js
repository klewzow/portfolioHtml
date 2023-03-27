function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();




// const anchors = document.querySelectorAll('slide');

// for (var i = 0; i < anchors.length; i++) {
//     anchors[i].addEventListener('click', function (e) {
//         e.preventDefault();

//         const blockID = anchor.getAttribute('href');

//         document.querySelector(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// } 

/*
 * Smooth page scroll
 * плавный скролл по страннице
 */

// function documentSlideAction(el) {
//     const targetElement = el.target;
//     if (targetElement.closest('[data-goto]')) {

//         const goto = targetElement.closest('[data-goto]').dataset.goto;
//         const gotoElement = document.querySelector(goto);
//         const headerHeight = document.querySelector('.header').offsetHeight;
//         if (gotoElement) {
//             window.scrollTo({
//                 top: gotoElement.offsetTop - (headerHeight + 60),
//                 behavior: "smooth"
//             });
//         }
//         el.preventDefault();
//     }
// }

