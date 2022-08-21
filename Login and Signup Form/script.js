const forms = document.querySelectorAll('.forms'),
      pwShowHide = document.querySelectorAll('.eye-icon'),
      links = document.querySelectorAll('.link');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password');

        pwFields.forEach(pwField => {
            if(password.tpe === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bxx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})