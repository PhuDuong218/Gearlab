<div>
    <?php
    if (isset($_GET["quanli"])) {
        $tam = $_GET["quanli"];
        if ($tam == "sanpham") {
            include("mid/sanpham.php");
        } elseif ($tam == "lienhe") {
            include("mid/lienhe.php");
        } elseif ($tam == "gioithieu") {
            include("mid/gioithieu.php");
        } elseif ($tam == "trangchu"){
            include("mid/lienhe.php");
        }
    } else {
        $tam = '';
    }
    ?>
</div>