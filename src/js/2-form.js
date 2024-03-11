const feedbackForm = document.querySelector('.feedback-form');

const feedback = 'feedback-form-state';
let locStorValue = JSON.parse(localStorage.getItem(feedback));

// console.log(locStorValue.email);
// console.log(locStorValue.message);

if (locStorValue) {
  feedbackForm.elements.email.value = locStorValue.email;
  feedbackForm.elements.message.value = locStorValue.message;
}

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('submit', handleSubmite);

// console.log(!locStorValue);

function handleInput(event) {
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();
  locStorValue = { email, message };
  localStorage.setItem(feedback, JSON.stringify(locStorValue));
}

function handleSubmite(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.elements.email.value);
  //   console.log(event.currentTarget.elements.message.value);

  if (locStorValue.email === '' || locStorValue.message === '') {
    alert('Заповніть всі поля!');
    return;
  } else {
    console.log(locStorValue);
    localStorage.removeItem(feedback);
    event.currentTarget.reset();
  }
}
