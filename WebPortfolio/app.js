const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    
})