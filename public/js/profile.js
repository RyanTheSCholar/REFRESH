const newGoal = async (event) => {
  event.preventDefault();

  const categoryName = document.querySelector('#category-name').value.trim();
  const goalName = document.querySelector('#goal-name').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (categoryName && goalName && description) {
    const response = await fetch('/api/goal', {
      method: 'POST',
      body: JSON.stringify({ categoryName, goalName, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create goal');
    }
  }
};
document
  .getElementById('goalSubmit')
  .addEventListener('click', newGoal);

// (event) => {
//   const dropdown = document.getElementById('dropdown');
//   const selectedValue = document.getElementById('selected-value');
//   console.log(selectedValue);
//   // Listen for the "change" event on the dropdown
//   dropdown.addEventListener('change', function () {
//     const selectedOption = dropdown.options[dropdown.selectedIndex];
//     const value = selectedOption.value;
//     const text = selectedOption.text;

//     selectedValue.textContent = 'Selected value: ' + text + ' (' + value + ')';
//   });
//   event.preventDefault();
// };