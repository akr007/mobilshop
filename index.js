$(document).ready(function () {
   
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items: 1
    });

    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('#new-phones .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('#blogs .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    // isotope
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode: 'fitRows'
    });

    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    });

    // prduct quality section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    let $input = $(".qty .qty_input");

    // up
    $qty_up.click(function (e) { 
        if($input.val() >= 1 && $input.val() <= 9) {
            $input.val(function (i, oldval) { 
                return ++oldval;
            });
        }  
    });

    // down
    $qty_down.click(function (e) { 
        if($input.val() > 1 && $input.val() <= 10) {
            $input.val(function (i, oldval) { 
                return --oldval;
            });
        }  
    });

});