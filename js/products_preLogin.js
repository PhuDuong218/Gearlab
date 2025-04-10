
    
        document.querySelector('.read-more').addEventListener('click', function () {
            const moreContent = document.querySelector('.more-content');

            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'inline';
                this.textContent = 'Thu gọn';
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'Xem thêm';
            }
        });

    
        var input = document.querySelector('#qty');
        var btnminus = document.querySelector('.qtyminus');
        var btnplus = document.querySelector('.qtyplus');

        if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

            var min = Number(input.getAttribute('min'));
            var max = Number(input.getAttribute('max'));
            var step = Number(input.getAttribute('step'));

            function qtyminus(e) {
                var current = Number(input.value);
                var newval = (current - step);
                if (newval < min) {
                    newval = min;
                } else if (newval > max) {
                    newval = max;
                }
                input.value = Number(newval);
                e.preventDefault();
            }

            function qtyplus(e) {
                var current = Number(input.value);
                var newval = (current + step);
                if (newval > max) newval = max;
                input.value = Number(newval);
                e.preventDefault();
            }

            btnminus.addEventListener('click', qtyminus);
            btnplus.addEventListener('click', qtyplus);

        } // End if test

        // Lấy các phần tử modal
        const modal = document.getElementById('loginModal');
        const span = document.querySelector('.close');

        // Hiển thị modal khi bấm "MUA NGAY"
        document.querySelector('.buy-button').addEventListener('click', function () {
            modal.style.display = "block";
        });

        // Hiển thị modal khi bấm biểu tượng giỏ hàng
        document.querySelector('.fa-shopping-cart').addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = "block";
        });

        // Đóng modal khi bấm vào dấu X
        span.addEventListener('click', function () {
            modal.style.display = "none";
        });

        // Đóng modal khi bấm bên ngoài nội dung modal
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
