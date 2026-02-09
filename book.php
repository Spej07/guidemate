<?php
$destination = htmlspecialchars($_GET['destination'] ?? '');

echo "<h1>Search Results</h1>";
echo "<p>You searched for: <strong>$destination</strong></p>";
echo "<a href='index.html'>Back</a>";
?>
