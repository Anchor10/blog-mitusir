$(function () {
    var bannerSwiper = new Swiper('#banner-swiper', {
        autoplay: {
            disableOnInteraction: false,
            delay: 3000,
        },
        loop: true,
        pagination: {
            el: '#banner-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '#banner-next',
            prevEl: '#banner-prev',
        },
    })

    $("#banner-swiper").hover(function () {
        $(this).find(".swiper-button-prev").show();
        $(this).find(".swiper-button-next").show();
    }, function () {
        $(this).find(".swiper-button-prev").hide();
        $(this).find(".swiper-button-next").hide();
    })

    // $(document).scroll(function () {
    //     var H = $(window).scrollTop()

    //     if (H >= 240) { 
    //         $('.side').css({
    //             'position': 'fixed',
    //             'top': '70px',
    //             'right': '0px'
    //         })
    //     }else{
    //         $('.side').css({
    //             'position': 'static'
    //         })
    //     }
    // });


    $('.send').on('click',function(){
        $.ajax({
            method: 'POST',
            url: '/sendmail',
            data:{
                username:'hello',
                password:'123',
                email:'1129713332@qq.com'
            },
            success:(res) => {
                console.log(res)
            }
        })
    })
})