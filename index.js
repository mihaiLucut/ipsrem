const currentYear =  new Date().getFullYear();

document.querySelector('#copyright-year').innerHTML = currentYear;

function scrollToContact(location) {
  document.querySelector(location).scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function sendMail() {
  const params = {
    fullName: document.querySelector('#fullName').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    message: document.querySelector('#message').value
  }

  const serviceId = 'service_gafig5f';
  const templateId = 'template_tz9eld2';

  emailjs.send(serviceId, templateId, params)
  .then( res => {
    document.querySelector('#fullName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#message').value = '';
  })
  .catch (error => console.log(error));
}

