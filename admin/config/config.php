<?php
$conn = new mysqli('localhost', 'my_user', 'your_password', 'my_db');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>