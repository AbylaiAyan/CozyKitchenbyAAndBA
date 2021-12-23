window.addEventListener('scroll', animation);

function animation(){
    var animations = document.querySelectorAll('.animation');

    for(var i = 0; i < animations.length; i++){
        var windowHeight = window.innerHeight;
        var animationtop = animations[i].getBoundingClientRect().top;
        var animaitionpoint = 50;

        if(animationtop < windowHeight - animaitionpoint){
            animations[i].classList.add('active');
        }else{
            animations[i].classList.remove('active');
        }

    }
    setTimeout(() => {
        animation();
   }, 300);
}

let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
});

// window.addEventListener('scroll', onScroll);

// const animation = document.querySelectorAll('.animation');
// if(animation.length > 0){
//     function onScroll(){
//         for(let  index = 0; index < animation.length; index++){
//             const animitem = animation[index];
//             const animitemHeight = animitem.offsetHeight;
//             const animitemOffset = offset(animitem).top;
//             const animStart = 4;

//             let animitemPoint = window.innerHeight - animitemHeight / animStart;
//             if(animitemHeight > window.innerHeight){
//                 animitemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if((window.pageYOffset > animitemOffset - animitemPoint) && window.pageYOffset < (animitemOffset + animitemHeight)){
//                 animitemPoint.classList.add('active');
//             }else{
//                 if(!animitem.classList.contains('anim-no-hide')){
//                     animitemPoint.classList.remove('active');
//                 }

//             }
//         }
//     }
//     function offset(el) {
//         var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//     setTimeout(() => {
//         onScroll();
//     }, 300);

// }
