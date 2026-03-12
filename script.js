// JavaScript for form validation and interactivity

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name === "" || email === "") {
        alert("Name and email must be filled out.");
        return false;
    }
    return true;
}

function setupInteractiveFeatures() {
    var button = document.getElementById('submitButton');
    button.addEventListener('click', function() {
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });
}

window.onload = setupInteractiveFeatures;