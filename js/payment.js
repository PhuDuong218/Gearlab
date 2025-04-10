
        // kiếm thẻ có id là mainNav 
        //kiếm thẻ ul
        var paymentMethod = document.getElementById("payment__method");
        // kiếm thẻ con li 
        var listMethod = paymentMethod.getElementsByTagName("label");
        for (var i = 0; i < listMethod.length; i++) {
            // khi thẻ li đc click thì gọi hàm nó ra
            listMethod[i].addEventListener("click", function () {
                //tìm thẻ nào đang đc gắn acitve
                var current = document.querySelector("#payment__method .active");
                // xóa class active của thẻ đang được gắn
                current.className = current.className.replace("active", "");
                // thêm class active vào thẻ li được click 
                this.className += "active";

            });
        }


        function validateForm() {
            const name = document.getElementById("payment--receiver").value;
            const phone = document.getElementById("payment--phone").value;
            const address = document.getElementById("payment--adr").value;

            if (!name || !phone || !address) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return false;
            }
            return true;
        }
        document.querySelector(".payment--button").addEventListener("click", function (e) {
            if (!validateForm()) {
                e.preventDefault();
            }
        });

        // cập nhật tổng tiền
        function updateTotal() {
            const cartItems = document.querySelectorAll(".cart-item");
            let total = 0;
            cartItems.forEach(item => {
                total += parseInt(item.getAttribute("data-price"));
            });
            const shippingFee = parseInt(document.getElementById("ship-price").getAttribute("ship-price"));
            const finalTotal = total + shippingFee;

            document.getElementById("total-price").innerText = `${total.toLocaleString()}₫`;
            document.getElementById("total-price-final").innerText = `${finalTotal.toLocaleString()}₫`;
        }
        updateTotal();

        document.getElementById("payment--defaul").addEventListener("change", function () {
            if (this.checked) {
                document.getElementById("payment--receiver").value = "Nguyễn Xuân Anh";
                document.getElementById("payment--phone").value = "0909123456";
                document.getElementById("payment--adr").value = "254 Âu Cơ, Tân Bình, TP. HCM";
            }
            else {
                document.getElementById("payment--receiver").value = "";
                document.getElementById("payment--phone").value = "";
                document.getElementById("payment--adr").value = "";
            }
        });

        
