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
    // Search trên shop.html
    var searchBar = document.getElementById('search-bar');
    if(searchBar) {
        document.querySelector('.btn-small').onclick = function() {
            alert('Tính năng tìm kiếm mô phỏng – vui lòng triển khai backend để hiển thị kết quả thực!');
        }
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
