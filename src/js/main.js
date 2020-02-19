$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

window.onscroll = () => {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        const elem = document.getElementById('navbar');
        elem.style.backgroundColor = '#fff';
        elem.style.boxShadow = '0px 0px 10px 5px #ccc';

    } else {
        const elem = document.getElementById('navbar');
        elem.style.backgroundColor = 'transparent';
        elem.style.boxShadow = 'none';
    }


}