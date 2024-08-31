document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        document.getElementById('formResponse').textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverElement = document.getElementById('services');
    const audio = document.getElementById('hoverAudio');
  
    hoverElement.addEventListener('mouseenter', function() {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverElement = document.getElementById('about');
    const audio = document.getElementById('hoverAudio');
  
    hoverElement.addEventListener('mouseenter', function() {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverElement = document.getElementById('why');
    const audio = document.getElementById('hoverAudio');
  
    hoverElement.addEventListener('mouseenter', function() {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverElement = document.getElementById('testimonials');
    const audio = document.getElementById('hoverAudio');
  
    hoverElement.addEventListener('mouseenter', function() {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverElement = document.getElementById('contact');
    const audio = document.getElementById('hoverAudio');
  
    hoverElement.addEventListener('mouseenter', function() {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    });
});