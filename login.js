// Basic example form submission handler with alert; replace with your own logic

const forms = {
  patientLoginForm: document.getElementById('patientLoginForm'),
  patientRegisterForm: document.getElementById('patientRegisterForm'),
  doctorLoginForm: document.getElementById('doctorLoginForm'),
  doctorRegisterForm: document.getElementById('doctorRegisterForm')
};

for (let formKey in forms) {
  if (forms[formKey]) {
    forms[formKey].addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted: ' + formKey);
      // Add your form submission logic (e.g., AJAX or redirect here)
    });
  }
}
