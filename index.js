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
    message: document.querySelector('#message').value,
    zipCode: document.querySelector('#zipCode').value
  }

  const serviceId = 'service_gafig5f';
  const templateId = 'template_x1m4q3k';

  emailjs.send(serviceId, templateId, params)
  .then( res => {
    document.querySelector('#fullName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#message').value = '';
    document.querySelector('#zipCode').value = '';
  })
  .catch (error => console.log(error));
}

