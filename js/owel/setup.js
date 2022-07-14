$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop
    margin:10, //margem entre os filmes
    nav:false, //icone de navegação
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})