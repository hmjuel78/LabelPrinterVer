"use strict"

$(document).ready(function () {


    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("tmer").innerHTML = minutes + ":" + seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("tmer").innerHTML = "EXPIRED";
        }
    }, 1000);

    //left_side scroll js
    $(".tun_scroll").niceScroll({
        cursorcolor: "#FF0000",
        cursorwidth: "5px",
        cursorborder: "transparent",
        autohidemode: true,
        background: "#fff",
        iframeautoresize: true,
        smoothscroll: true,
    });
    //left_side scroll js
    $(".sql_box_scroll").niceScroll({
        cursorcolor: "#FF0000",
        cursorwidth: "5px",
        cursorborder: "transparent",
        autohidemode: true,
        background: "#fff",
        iframeautoresize: true,
        smoothscroll: true,
    });

    $('.name_item').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-star"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-star"></i></button>',
    });

    $('.catagory_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-star"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-star"></i></button>',
    });


});