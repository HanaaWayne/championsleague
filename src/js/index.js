import forbiddenWords from "../js/constants/forbiddenWords.js"

const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", function(event){
    event.preventDefault()//default -> empêcher
    // console.log("c est ok")
    // const email = document.getElementById("inputEmail")
    // const password = document.getElementById("inputPassword")
})

const email = document.getElementById('inputEmail');
email.addEventListener('input',function(event){
    console.log(event.target.value);

    const pattern = new RegExp(/^[a-z]{10}$/, 'g')

    if (pattern.test(event.target.value)==true){
        email.style.border = "green 2px solid"
    }else {
        email.style.border = "red 2px solid"
    }

    // for(const word of forbiddenWords){
    //     if(event.target.value == word){
    //         event.target.value= ''

    //         const errorEmail = document.getElementById("error-email")
    //         errorEmail.innerHTML ="C'est pas good"
    //         email.style.border = "2px solid #b91e1e"
    //     }
    // }

})

const password = document.getElementById('inputPassword');
password.addEventListener('input',function(event){
    console.log(event.target.value);
    // if (event.target.value == 'batman'){
    //     event.target.value = '';
    // }
    for(const word of forbiddenWords){
        if(event.target.value == word){
            event.target.value= ''
        }
    }
})