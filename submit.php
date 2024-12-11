<?php
// Database connection parameters
$servername = "localhost"; // or your database server
$username = "root"; // your MySQL username
$password = ""; // your MySQL password
$dbname = "abc"; // your database name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//asdsdas
// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    // Sanitize data to prevent SQL injection
    $name = $conn->real_escape_string($name);
    $email = $conn->real_escape_string($email);
    $age = (int)$age;

    // Insert data into the database
    $sql = "INSERT INTO table1 (name, email, age) VALUES ('$name', '$email', $age)";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}




setcookie("name",$name,time()+86400,"/");
setcookie("mail",$email,time()+86400,"/");



session_start();
$_SESSION['name_s'] = $name;
$_SESSION['mail_s'] = $email;

// Close the connection
$conn->close();
?>