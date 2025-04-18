<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $product = htmlspecialchars($_POST['product']);
  echo "<h1>Thank you for purchasing: $product</h1>";
}
?>