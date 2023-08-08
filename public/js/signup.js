<<<<<<< HEAD
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>User Registration</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
//   <link rel="stylesheet" href="https://wikiki.github.io/components/steps/dist/bulma-steps.min.css">
// </head>
// <body>
//   <div class="container">
//     <div class="steps" id="stepsDemo">
//       <!-- ... Step indicators ... --&gt;
//     </div>
//     <form class="signup-form">
//       <div class="steps-content">
//         <!-- ... Step content ... --&gt;
//       </div>
//       <div class="steps-actions">
//         <div class="steps-action">
//           <a href="#" data-nav="previous" class="button is-light">Previous</a>
//         </div>
//         <div class="steps-action">
//           <a href="#" data-nav="next" class="button is-light">Next</a>
//         </div>
//       </div>
//     </form>
//   </div>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/js/bulma.min.js"></script>
//   <script src="https://wikiki.github.io/components/steps/dist/bulma-steps.min.js"></script>
//   <script>
//     document.addEventListener('DOMContentLoaded', () =&gt; {
//       // Initialize current step index
//       let currentStepIndex = 0;

//       // Get all steps and step content
//       const steps = document.querySelectorAll('.step-item');
//       const stepContents = document.querySelectorAll('.step-content');

//       // Function to move to the next step
//       const goToNextStep = () =&gt; {
//         if (currentStepIndex < steps.length - 1) {
//           stepContents[currentStepIndex].classList.remove('is-active');
//           currentStepIndex++;
//           stepContents[currentStepIndex].classList.add('is-active');
//           updateStepIndicator();
//         &rbrace;
//       &rbrace;;

//       // Function to move to the previous step
//       const goToPreviousStep = () =&gt; {
//         if (currentStepIndex &gt; 0) {
//           stepContents[currentStepIndex].classList.remove('is-active');
//           currentStepIndex--;
//           stepContents[currentStepIndex].classList.add('is-active');
//           updateStepIndicator();
//         &rbrace;
//       &rbrace;;

//       // Function to update step indicator
//       const updateStepIndicator = () =&gt; {
//         steps.forEach((step, index) => {
//           if (index === currentStepIndex) {
//             step.classList.add('is-active');
//           } else {
//             step.classList.remove('is-active');
//           }
//         });
//       &rbrace;;

//       // Attach event listeners to navigation buttons
//       document.querySelector('[data-nav="previous"]').addEventListener('click', goToPreviousStep);
//       document.querySelector('[data-nav="next"]').addEventListener('click', goToNextStep);

//       // Your signup form handler function
//       const signupFormHandler = async (event) =&gt; {
//         event.preventDefault();

//         // Your form field selections here

//         if (firstName && lastName && email && password && gender && age && weight && height && activityLevel) {
//           const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({ firstName, lastName, email, password, gender, age, weight, height, activityLevel }),
//             headers: { 'Content-Type': 'application/json' &rbrace;,
//           &rbrace;);

//           if (response.ok) {
//             document.location.replace('/profile');
//           &rbrace; else {
//             alert(response.statusText);
//           &rbrace;
//         &rbrace;
//       &rbrace;;

//       document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
//     &rbrace;);
//   </script>
// </body>
// </html>
=======
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


>>>>>>> a53ffcc134ee0e0ca673d570b6d4f26911239d1a
