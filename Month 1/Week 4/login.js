function emailCheck(){
    const email = document.querySelector(".email").value
    const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(result)){
        return true;
    }
    else{
        const emailError = document.querySelector(".email-error")
        emailError.innerHTML = "Invail Email!! Please try again"
        emailError.style.color = "red"
    }
}


function pwdCheck(){
    const pwd = document.querySelector(".pass").value
    const result1 = /^[A-Za-z]\w{7,14}$/;
    if(pwd.match(result1)){
        return true;
    }
    else{
        const pwdError = document.querySelector(".pwd-error")
        pwdError.innerHTML = "Invalid Password!!"
        pwdError.style.color = "red"
    }
}