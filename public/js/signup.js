bulmaSteps.attach();
const signupFormHandler = async (event) => {
  event.preventDefault();
  //   const next = document.querySelector('.steps-action'); // for the next button to identify it by the data-type aka the specific data-attribute that is on it

  //   const stepItem = document.querySelector('.step-item');
  //   const lastStep = document.querySelector('#step-4');
  const firstName = document.querySelector('#firstname').value.trim();
  const lastName = document.querySelector('#lastname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const age = document.querySelector('#age').value.trim();
  const weight = document.querySelector('#weight').value.trim();
  const height = document.querySelector('#height').value.trim();
  const activityLevel = document.querySelector('#activity').value.trim();

  console.log('hello world');
  console.log(firstName);

  if (firstName && lastName && email && password && gender && age && weight && height && activityLevel) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, gender, age, weight, height, activityLevel }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', signupFormHandler);

document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step-item');
  const submitButton = document.getElementById('submit-button');
  const next = document.querySelector('.next');
  // Function to handle step activation
  function handleStepActivation() {
    steps.forEach((step) => {
      if (step.classList.contains('is-active')) {
        if (step.id === 'step-4') {
          next.innerHTML = '';
          next.style.display = 'none';
          submitButton.style.display = 'block';
        } else {
          submitButton.style.display = 'none';
        }
      }
    });
  }
  //   Listen for changes in step activation
  steps.forEach((step) => {
    const observer = new MutationObserver(handleStepActivation);
    observer.observe(step, { attributes: true, attributeFilter: ['class'] });
  });
  // Initial check on page load
  handleStepActivation();
});


