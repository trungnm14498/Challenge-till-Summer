# Validate Form Register
## HTML
Không có gì nhiều, đơn giản là một form submit

## CSS
- Same here, cũng không có gì mới, chỉ là thiết kế một form đăng kí bình thường
- À có một cái mới là hiệu ứng lỗi khi các trường được nhập không chính xác, ở đây sử dụng 2 thẻ
chồng lên nhau rồi ẩn một thẻ đi và thêm hiệu ứng transition xuất hiện khi báo lỗi

## JS
- Viết các function nhỏ giải quyết công việc, cụ thể:
1. Kiểm tra xem có trường nào đang để trống hay không
2. Check email hợp lệ bằng regex
3. Check độ dài username, pass, ...
4. Check pass có match với nhau hay không
