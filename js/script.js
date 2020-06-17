// For auto-slideshow
// initialize swiper
var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    delay: 3000,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination'
    },
});

// For auto-slideshow
var mySwiper = document.querySelector('.swiper-container').swiper

// Now you can use all slider methods like
mySwiper.autoplay.start();

// These are for Cart
$(function() {

    var goToCartIcon = function($addTocartBtn) {
        var $cartIcon = $(".my-cart-icon");
        var $image = $('<img width="70px" height="70px" src="' + $addTocartBtn.data("image") + '"/>').css({
            "position": "fixed",
            "z-index": "5"
        });
        $addTocartBtn.prepend($image);
        var position = $cartIcon.position();
        $image.animate({
            top: position.top,
            left: position.left
        }, 500, "linear", function() {
            $image.remove();
        });
    }

    $('.my-cart-btn').myCart({
        currencySymbol: '$',
        classCartIcon: 'my-cart-icon',
        classCartBadge: 'my-cart-badge',
        classProductQuantity: 'my-product-quantity',
        classProductRemove: 'my-product-remove',
        classCheckoutCart: 'my-cart-checkout',
        affixCartIcon: true,
        showCheckoutModal: true,
        numberOfDecimals: 2,
        clickOnAddToCart: function($addTocart) {
            goToCartIcon($addTocart);
        },
        afterAddOnCart: function(products, totalPrice, totalQuantity) {
            console.log("afterAddOnCart", products, totalPrice, totalQuantity);
        },
        clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
            console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
        },
        checkoutCart: function(products, totalPrice, totalQuantity) {
            var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;

            alert(checkoutString)
            console.log("checking out", products, totalPrice, totalQuantity);
        },
        /* For Discount
        getDiscountPrice: function(products, totalPrice, totalQuantity) {
            console.log("calculating discount", products, totalPrice, totalQuantity);
            return totalPrice * 0.5;
        }*/
    });

    $("#addNewProduct").click(function(event) {
        var currentElementNo = $(".row").children().length + 1;
        $(".row").append('<div class="col-md-4 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
    });
});