document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && message && phone) {
        document.getElementById('formResponse').textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }
});
