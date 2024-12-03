const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('#register-form');

// Lấy các nút eye để thay đổi hiển thị mật khẩu
const togglePassword1 = document.getElementById('togglePassword1');
const togglePassword2 = document.getElementById('togglePassword2');

// Hàm thay đổi mật khẩu giữa dạng text và password
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

// Thêm sự kiện cho biểu tượng con mắt
togglePassword1.addEventListener('click', function() {
    const eyeIcon = this.querySelector('i');
    togglePasswordVisibility(password, eyeIcon);
});

togglePassword2.addEventListener('click', function() {
    const eyeIcon = this.querySelector('i');
    togglePasswordVisibility(confirmPassword, eyeIcon);
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống!');
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    input.value = input.value.trim();
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let isEmailError = !regexEmail.test(input.value);
    if (!isEmailError) {
        showSuccess(input);
    } else {
        showError(input, 'Email bạn nhập không hợp lệ!');
    }
    return isEmailError;
}

function checkLengthErrorUsername(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Tên đăng nhập phải có ít nhất ${min} ký tự!`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Tên đăng nhập không được vượt quá ${max} ký tự!`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkLengthErrorPassword(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Mật khẩu phải có ít nhất ${min} ký tự!`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Mật khẩu không được vượt quá ${max} ký tự!`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkMatchPasswordError(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Mật khẩu xác nhận không đúng!');
        return true;
    }
    showSuccess(confirmPassword);
    return false;
}

function saveUserData() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const user = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    };

    // Lấy mảng người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra tên đăng nhập đã tồn tại
    if (users.some(user => user.username === usernameValue)) {
        alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
        return;
    }

    // Thêm người dùng mới vào mảng
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isEmailError = checkEmailError(email);
    let isUserNameLengthError = checkLengthErrorUsername(username, 7, 20);
    let isPasswordLengthError = checkLengthErrorPassword(password, 6, 20);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);
    let isEmptyError = checkEmptyError([email, username, password, confirmPassword]);

    if (!isEmailError && !isUserNameLengthError && !isPasswordLengthError && !isMatchError && !isEmptyError) {
        saveUserData();
        alert("Đăng ký thành công!");
        window.location.href = "Login.html";
    }
});
