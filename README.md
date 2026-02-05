# Project II

Trang web mẫu cho Project 2 — frontend tĩnh bằng HTML/CSS/JavaScript.

## Mô tả
- Giao diện cửa hàng đơn giản với các trang: `index.html`, `shop.html`, `product.html`, `cart.html`, `checkout.html`, `order-success.html`, `login.html`.
- Có khu vực admin trong thư mục `admin/` gồm `admin/index.html`, `admin/orders.html`, `admin/products.html`.

## Chạy thử local
- Mở trực tiếp `index.html` trong trình duyệt, hoặc chạy server tĩnh từ thư mục dự án:

```bash
# từ C:\Project2
npx http-server -c-1
# Mở http://localhost:8080
```

## Trạng thái
- Hiện tại: frontend tĩnh (vanilla HTML/CSS/JS). Không có backend hoặc database.
- Nếu cần chức năng động (ghi đơn, đăng nhập, lưu dữ liệu), cần thêm API/DB (ví dụ Node+Express hoặc Supabase).

## Cấu trúc chính
- `index.html`, `shop.html`, `product.html`, `cart.html`, `checkout.html`, `order-success.html`, `login.html`
- `script.js`, `style.css`
- `admin/` (admin HTML, `admin-script.js`, `admin-style.css`)


