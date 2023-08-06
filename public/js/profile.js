const newFormHandler = async (event) => {
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

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create goal');
    }
  }
};
document
  .querySelector('.new-goal-form')
  .addEventListener('submit', newFormHandler);
