function emailCheck(){
    const email = document.querySelector(".email")
    const em = email.value
    console.log(email)
    const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(em.match(result)){
        return true;
    }
    else{
        const emailError = document.querySelector(".email-error")
        emailError.innerHTML = "<strong>Invalid Email</strong>"
        emailError.style.color = "red"
        email.style.borderColor = "red"
    }
}



function pwdCheck(){
    const pwd = document.querySelector(".pwd")
    const password = pwd.value
    const result1 = /^[A-Za-z]\w{7,14}$/;
    if(password.match(result1)){
        return true
    }
    else{
        const pwdError = document.querySelector(".pwd-error")
        pwdError.style.borderColor = "red"
        pwdError.style.color = "red"
        pwdError.innerHTML = "Password is invalid!!"
        console.log(pwdError)
    }
}
