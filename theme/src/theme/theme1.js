//
// function scrol(send_to){
//     var javade = $('html,body').contents().find('#'+send_to).offset().top;
//     $('html, body').animate({
//         scrollTop: javade - 50
//     },1000);
// }
//console.log($('html,body').contents().find('#about').offset().top);
// function scrol(send_to) {
//
//
//     var hash = document.getElementById(send_to).offsetTop;
//     console.log(hash);
//     document.contentWindow.scrollTo(0,ha

$(document).ready(function () {
    // $.ajax({
    //     url: '../node_modules/vue2-google-maps/dist/vue-google-maps.js',
    //     dataType:'script',
    //     success: function(){
    //         console.log('hello');
    //     }
    // });

    $.ajax({
        url: '../node_modules/owl.carousel/dist/owl.carousel.min.js',
        dataType:'script',
        success: function(){
            console.log('hello lightbox js');
            $(document).ready(function(){
                $('.owl-carousel').owlCarousel({
                    nav:true,
                });
            });
        }
    })

})






