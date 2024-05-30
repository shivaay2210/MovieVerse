const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.remember-forgot');
const forgotForm = document.querySelector('.forgot-password');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

forgotLink.addEventListener('click', () => {
    logregBox.classList.remove('active');

    document.querySelector('.logreg-box').style.display = 'none';

    if (forgotForm.style.display === 'block') {
        forgotForm.style.display = 'none'; // Hide the form
    } else {
        forgotForm.style.display = 'block'; // Show the form
    }

});

// const logregBox = document.querySelector('.logreg-box');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const forgotLink = document.querySelector('.remember-forgot');
// const forgotForm = document.querySelector('.forgot-password form')

// registerLink.addEventListener('click', ()=>{
//     logregBox.classList.add('active');
// });

// loginLink.addEventListener('click', ()=>{
//     logregBox.classList.remove('active');
// });

// forgotLink.addEventListener('click', ()=>{
//     forgotForm.classList.remove('active');
//     // alert('hi');
// });

// forgotLink.addEventListener('click', ()=>{
//     forgotForm.classList.add('active');
// });


// const buttons = document.querySelectorAll('btn');

// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("onclick", ()=>{
//         windows.location.href = "movieSite.html";
//     });
// }
