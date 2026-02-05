// Script quản trị admin - Mockup cho Project 2

// Modal Form Sản phẩm
function openProductModal(productId = null, name = '', price = '', categoryId = '', description = '', stock = '', imageUrl = '') {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('productForm');
    
    if (productId) {
        // Chế độ sửa
        modalTitle.textContent = 'Sửa sản phẩm';
        document.getElementById('productId').value = productId;
        document.getElementById('productName').value = name;
        document.getElementById('productPrice').value = price;
        document.getElementById('productCategory').value = categoryId;
        document.getElementById('productDescription').value = description;
        document.getElementById('productStock').value = stock;
        document.getElementById('productImage').value = imageUrl;
    } else {
        // Chế độ thêm mới
        modalTitle.textContent = 'Thêm sản phẩm mới';
        form.reset();
        document.getElementById('productId').value = '';
    }
    
    modal.classList.add('show');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

function saveProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productId = formData.get('productId');
    
    if (productId) {
        alert('Mockup: Đã cập nhật sản phẩm thành công!');
    } else {
        alert('Mockup: Đã thêm sản phẩm mới thành công!');
    }
    
    closeProductModal();
    // Trong thực tế, sẽ gọi API để lưu dữ liệu
}

function deleteProduct(productId) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        alert('Mockup: Đã xóa sản phẩm ID: ' + productId);
        // Trong thực tế, sẽ gọi API để xóa
    }
}

// Đóng modal khi click bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeProductModal();
    }
}
