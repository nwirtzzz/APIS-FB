const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = registerForm.elements.username.value;
  const password = registerForm.elements.password.value;
  const data = { username, password };

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    // Registration successful
    alert('Registration successful');
    window.location.href = '/login';
  } catch (error) {
    console.error(error);
    alert('Registration failed');
  }
});
