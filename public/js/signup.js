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