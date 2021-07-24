function getAllInputsValueFromLogin() {
    var email = document.getElementById("email-input").value; // get element by id name and get the input value
    var password = document.getElementById("password-input").value;
    var emailMatch = email.match(/[A-z]+@(gmail)\.(com)/i);

    

    if (email == "" && password == "") {
        alert("The E-mail and password are empty");
    }

    

    else if (emailMatch === null && password == "") {
        alert("The E-mail is wrong and password is empty");
    }

    

    else if (email == "") {
        alert("The E-mail is empty");
    }

    

    else if (password == "") {
        alert("tThe password is empty");
    }
    
    else if (emailMatch === null) {
        alert("The E-mail is wrong");
    }

    

    else {
        window.location = "../html/productslist.htm";
        localStorage.setItem("is-signup", false);
    }
}
