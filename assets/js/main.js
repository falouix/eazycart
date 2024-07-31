$(document).ready(function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        $('#cart-count').text(cart.length);
    }

    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    updateCartCount();

    $('.add-to-cart').on('click', function () {
        const product = {
            id: $(this).data('id'),
            name: $(this).data('name'),
            price: $(this).data('price')
        };
        addToCart(product);
    });

    $('#show-login').on('click', function () {
        $('#inscrit-component').hide();
        $('#login-component').show();
    });

    $('#show-inscrit').on('click', function () {
        $('#login-component').hide();
        $('#inscrit-component').show();
    });
});