var username = null;


function getAllInputsValueSignup() {
    username = document.getElementById("username-input").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    var emailMatch = email.match(/[A-z]+@(gmail)\.(com)/i);

    

    if (username == "" && email == "" && password == "") {
        alert("The Username and E-mail and Password are empty");
    }
    else if (username == "" && emailMatch === null && password == "") {
        alert("The E-mail is wrong and the Username and Password are empty");
    }
    else if (username == "" && password == "") {
        alert("The Username and Password are empty");
    }
    else if (username == "" && email == "") {
        alert("The Username and E-mail are empty");
    }
    else if (email == "" && password == "") {
        alert("The E-mail and Password are empty");
    }
    else if (emailMatch === null && username == "") {
        alert("The E-mail is wrong and the Username is empty");
    }
    else if (emailMatch === null && password == "") {
        alert("The E-mail is wrong and Password is empty");
    }
    else if (emailMatch === null) {
        alert("The E-mail is wrong");
    }
    else if (username == "") {
        alert("The Username is empty");
    }
    else if (email == "") {
        alert("he E-mail is empty");
    }
    else if (password == "") {
        alert("The Password is empty");
    }
    else {
        localStorage.setItem("name", username)
        localStorage.setItem("is-signup", true)
        window.location = "../html/productslist.htm";
    }
}
