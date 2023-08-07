bulmaSteps.attach();

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstname').value.trim();
  const lastName = document.querySelector('#lastname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const age = document.querySelector('#age').value.trim();
  const weight = document.querySelector('#weight').value.trim();
  const height = document.querySelector('#height').value.trim();
  const activityLevel = document.querySelector('#activity').value.trim();

  if (firstName && lastName && email && password && gender && age && weight && height && activityLevel) {
    const response = await fetch('/api/users', {
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
onFinish.addEventListener('click', signupFormHandler);