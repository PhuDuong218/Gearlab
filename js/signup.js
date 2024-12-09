document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register-form");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const togglePassword1 = document.getElementById("togglePassword1");
    const togglePassword2 = document.getElementById("togglePassword2");

    // Thêm sự kiện để ẩn/hiện mật khẩu
    togglePassword1.addEventListener("click", function() {
        togglePasswordVisibility(password, this.querySelector('i'));
    });

    togglePassword2.addEventListener("click", function() {
        togglePasswordVisibility(confirmPassword, this.querySelector('i'));
    });

    // Hàm thay đổi hiển thị mật khẩu
    function togglePasswordVisibility(input, icon) {
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;

        if (type === 'password') {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    }

    // Hàm kiểm tra form có lỗi không
    function validateForm() {
        let valid = true;

        // Kiểm tra email hợp lệ
        const emailValue = email.value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(emailValue)) {
            alert("Email không hợp lệ.");
            valid = false;
        }

        // Kiểm tra tên đăng nhập
        const usernameValue = username.value.trim();
        if (usernameValue.length < 7) {
            alert("Tên đăng nhập phải có ít nhất 7 ký tự.");
            valid = false;
        }

        // Kiểm tra mật khẩu
        const passwordValue = password.value.trim();
        if (passwordValue.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự.");
            valid = false;
        }

        // Kiểm tra mật khẩu xác nhận
        const confirmPasswordValue = confirmPassword.value.trim();
        if (passwordValue !== confirmPasswordValue) {
            alert("Mật khẩu xác nhận không khớp.");
            valid = false;
        }

        return valid;
    }

    // Lắng nghe sự kiện submit của form
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Ngừng hành động mặc định của form

        // Kiểm tra dữ liệu form trước khi gửi
        if (validateForm()) {
            saveUserData();
            alert("Đăng ký thành công!");

            // Đăng nhập ngay sau khi đăng ký thành công
            // loginAfterSignup();

            // Chuyển hướng đến trang đăng nhập hoặc trang chủ
            window.location.href = "../pages/Login.html"; // Hoặc trang chủ nếu muốn
        }
    });

    // Hàm lưu dữ liệu người dùng vào localStorage
    function saveUserData() {
        const user = {
            email: email.value.trim(),
            username: username.value.trim(),
            password: password.value.trim(),
        };

        // Lấy danh sách người dùng từ localStorage (nếu có)
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Kiểm tra xem tên đăng nhập đã tồn tại chưa
        if (users.some(existingUser => existingUser.username === user.username)) {
            alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
            return;
        }

        // Thêm người dùng mới vào danh sách và lưu vào localStorage
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Hàm đăng nhập tự động sau khi đăng ký
    function loginAfterSignup() {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        // Kiểm tra thông tin người dùng trong localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === usernameValue && user.password === passwordValue);

        if (user) {
            alert("Đăng nhập tự động thành công!");
        } else {
            alert("Đăng nhập thất bại!");
        }
    }
});
