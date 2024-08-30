// Cấu hình EmailJS
emailjs.init("4vVc0TR_e_xXTYGLG");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gửi email
    emailjs.sendForm('service_bvfcl2b', 'template_6rbycpc', this)
        .then(function (response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
        }, function (error) {
            console.log('Error:', error);
            alert('There was an error sending your message.');
        });
});
