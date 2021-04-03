let regexp = /^([A-Za-z0-9\.\-]+)\@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
let pwdreg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
let phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function validate(){
    let error = document.getElementById("error");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let phone = document.getElementById("phone");
    let pwd1 = document.getElementById("pwd1");

    if((regexp.test(email.value))&&(pwdreg.test(pwd.value))&&(phonereg.test(phone.value))&&(pwd.value==pwd1.value))
    {
        alert("Signup Success");
        return true;
     }
     else if(regexp.test(email.value) == false){
        error.innerHTML = "<span>&#9888;</span> Please enter a valid email address";
        error2.innerHTML = " "
        error3.innerHTML = " "
        error4.innerHTML = " "
        error.style.color = "red";
        email.style.border = "2px solid red";
        phone.style.border = "1px groove";
        pwd1.style.border = "1px groove";
        pwd.style.border = "1px groove";
        return false;
     }
     else if(phonereg.test(phone.value) == false){
        error.innerHTML = " "
        error2.innerHTML = "<span>&#9888;</span> Please enter a valid mobile number";
        error3.innerHTML = " "
        error4.innerHTML = " "
        error2.style.color = "red";
        phone.style.border = "2px solid red";
        email.style.border = "1px groove";
        pwd1.style.border = "1px groove ";
        pwd.style.border = "1px groove";
        return false;
     }
     else if (pwdreg.test(pwd.value) == false){
        error2.innerHTML = " "
        error.innerHTML = " "
        error4.innerHTML = " "
        error3.innerHTML = "<span>&#9888;</span>Your password must be minimum 8 characters long,contain at least one lower case and upper case letters and must contain atleast one number";
        error3.style.color = "red";
        pwd1.style.border = "1px groove";
        pwd.style.border = "2px solid red";
        phone.style.border = "1px groove";
        email.style.border = "1px groove";
        return false;
     }
     else{
        error2.innerHTML = " "
        error3.innerHTML = " "
        error.innerHTML = " "
        error4.innerHTML = "<span>&#9888;</span> both the entered passwords are not same";
        error4.style.color = "red";
        pwd1.style.border = "2px solid red";
        pwd.style.border = "2px solid red";
        phone.style.border = "1px groove";
        email.style.border = "1px groove";
        return false;
     }
         
}

function dovalidate(){
    let email1 = document.getElementById("email1");
    let error1 = document.getElementById("error1");
    let pwd3 = document.getElementById("pwd3");

    if((regexp.test(email1.value))&&(pwdreg.test(pwd3.value)))
    {
        alert("Login Success");
        return true;
     }
     else if(regexp.test(email1.value) == false){
        error1.innerHTML = "<span>&#9888;</span> Please enter a valid email address";
        error1.style.color = "red";
        email1.style.border = "2px solid red";
        pwd3.style.border = "1px groove";

        return false;
     }
     else if (pwdreg.test(pwd3.value) == false){
        error1.innerHTML = "<span>&#9888;</span>Your password must be minimum 8 characters long,contain at least one lower case and upper case letters and must contain atleast one number";
        error1.style.color = "red";
        pwd3.style.border = "2px solid red";
        email1.style.border = "1px groove";
        return false;
     }

}

   function CheckPasswordStrength(password) {
            var password_strength = document.getElementById("password_strength");

            //TextBox left blank.
            if (password.length == 0) {
                password_strength.innerHTML = "";
                return;
            }

            //Regular Expressions.
            var regex = new Array();
            regex.push("[A-Z]"); //Uppercase Alphabet.
            regex.push("[a-z]"); //Lowercase Alphabet.
            regex.push("[0-9]"); //Digit.
            regex.push("[$@$!%*#?&]"); //Special Character.

            var passed = 0;

            //Validate for each Regular Expression.
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(password)) {
                    passed++;
                }
            }

            //Validate for length of Password.
            if (passed > 2 && password.length > 8) {
                passed++;
            }

            //Display status.
            var color = "";
            var strength = "";
            switch (passed) {
                case 0:
                case 1:
                    strength = "Weak";
                    color = "red";
                    break;
                case 2:
                    strength = "Good";
                    color = "darkorange";
                    break;
                case 3:
                case 4:
                    strength = "Strong";
                    color = "green";
                    break;
                case 5:
                    strength = "Very Strong";
                    color = "darkgreen";
                    break;
            }
            password_strength.innerHTML = strength;
            password_strength.style.color = color;
        }

        

