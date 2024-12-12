const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword")

togglePassword.addEventListener("mousedown", function(){
    passwordInput.type = "text";
    togglePassword.src = "/assets/imgs/Olho.svg";
})

togglePassword.addEventListener("mouseup", function(){
    passwordInput.type = "password";
    togglePassword.src = "/assets/imgs/SemOlho.svg";
})

togglePassword.addEventListener("mouseleave", function(){
    passwordInput.type = "password"
    togglePassword.src = "/assets/imgs/SemOlho.svg"

})