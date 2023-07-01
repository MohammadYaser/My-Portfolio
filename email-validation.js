// Adding form validation in the form
const form = document.getElementById('form');
const errorMsg = form.querySelector('.errText');

function submitControl(event) {
  event.preventDefault();

  const email = document.getElementById('email');
  const emailVal = email.value;

  if (emailVal === emailVal.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.textContent = 'This message has not been sent! The e-mail must be in lower case letters.';
    form.append(errorMsg);
  }
}

form.addEventListener('submit', submitControl);







