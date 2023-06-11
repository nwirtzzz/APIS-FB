const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;
  const data = { username, password };

  try {
    const response = await fetch('/login', {
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

    // Login successful
    window.location.href = '/home';
  } catch (error) {
    console.error(error);
    alert('Login failed');
  }
});
