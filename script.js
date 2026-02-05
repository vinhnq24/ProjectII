// Mockup script cho một số thao tác cơ bản
// Thêm sản phẩm vào giỏ hàng (giả lập)
function addToCart() {
    alert('Đã thêm sản phẩm vào giỏ hàng!\n(Mockup – chưa lưu dữ liệu thực)');
}

function buyNow() {
    alert('Bạn chọn Mua ngay sản phẩm này! (Mockup – chuyển trực tiếp sang thanh toán)');
    window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', function(){
    // Search: hỗ trợ Enter và nút; redirect tới shop.html?q=term hoặc lọc tại chỗ trên shop.html
    var searchBar = document.getElementById('search-bar');
    function performSearch(term) {
        term = (term || '').trim();
        if (!term) {
            alert('Vui lòng nhập từ khóa tìm kiếm.');
            return;
        }
        // Nếu đang ở shop.html thì lọc trực tiếp, ngược lại chuyển sang shop.html với query
        if (window.location.pathname.indexOf('shop.html') !== -1) {
            filterProducts(term);
            // update URL param
            var newUrl = window.location.pathname + '?q=' + encodeURIComponent(term);
            history.replaceState({}, '', newUrl);
        } else {
            window.location.href = 'shop.html?q=' + encodeURIComponent(term);
        }
    }

    if (searchBar) {
        // tìm nút tìm kiếm gần input (nếu là button)
        var searchBtn = searchBar.nextElementSibling;
        if (!searchBtn || searchBtn.tagName.toLowerCase() !== 'button') {
            // fallback: chọn button.btn-small
            searchBtn = document.querySelector('button.btn-small');
        }
        if (searchBtn) {
            searchBtn.addEventListener('click', function(e){
                e.preventDefault();
                performSearch(searchBar.value);
            });
        }
        // Enter key
        searchBar.addEventListener('keydown', function(e){
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchBar.value);
            }
        });
    }

    // Nếu trên shop.html với param q, thực hiện lọc khi load
    function getQueryParam(name) {
        var params = new URLSearchParams(window.location.search);
        return params.get(name);
    }
    function filterProducts(term) {
        term = (term || '').toLowerCase();
        var cards = document.querySelectorAll('.product-card');
        var shown = 0;
        cards.forEach(function(card){
            var title = (card.querySelector('h3') || {textContent: ''}).textContent.toLowerCase();
            if (title.indexOf(term) !== -1) {
                card.style.display = '';
                shown++;
            } else {
                card.style.display = 'none';
            }
        });
        if (shown === 0) {
            alert('Không tìm thấy sản phẩm phù hợp với: "' + term + '"');
        }
    }
    var initialQ = getQueryParam('q');
    if (initialQ && window.location.pathname.indexOf('shop.html') !== -1) {
        var sb = document.getElementById('search-bar');
        if (sb) sb.value = initialQ;
        filterProducts(initialQ);
    }
    // Đăng nhập/Đăng ký mockup
    var loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Đăng nhập thành công! (Mockup)');
        }
    }
    var registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Đăng ký thành công! (Mockup)');
        }
    }
    // Thanh toán mockup
    var checkoutForm = document.querySelector('.checkout-form');
    if (checkoutForm) {
        checkoutForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Fashion Shop. (Mockup)');
        }
    }
});
