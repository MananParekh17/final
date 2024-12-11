function validateForm() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let gender = document.forms["suForm"]["gender"].value;
    let error = "";


    // Validate Name (Only Alphabets)
    if (!/^[A-Za-z\s]+$/.test(name)) {
        error += "Name should only contain alphabets.\n";
    }


    // Validate ID (Only Numbers, up to 3 digits)
    if (!/^\d{1,3}$/.test(id)) {
        error += "ID should only contain up to 3 digits.\n";
    }


    // Validate Phone Number (10 Digits)
    if (!/^\d{10}$/.test(phone)) {
        error += "Phone number should be exactly 10 digits.\n";
    }


    // Validate Email (Valid format)
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        error += "Email should be valid and contain '@'.\n";
    }


    // Validate Address (Not empty)
    if (address.trim() === "") {
        error += "Address cannot be empty.\n";
    }


    // Validate Password (At least 8 characters, one digit, one special character)
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(password)) {
        error += "Password must be at least 8 characters long, contain at least one digit and one special character.\n";
    }


    // Validate Gender (Must be selected)
    if (!gender) {
        error += "Please select a gender.\n";
    }


    if (error !== "") {
        alert(error);
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}