const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();
  const age = document.querySelector('#age-signup').value.trim();
  const weight = document.querySelector('#weight-signup').value.trim();
  const height = document.querySelector('#height-signup').value.trim();
  const activityLevel = document.querySelector('#activityLevel-signup').value.trim();

  if (firstName && lastName && email && password && gender && age && weight && height && activityLevel) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, gender, age, weight, height, activityLevel }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
