// Select the form
const form = document.getElementById("registrationForm");

// Listen for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // stop page reload

  // Get input values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const ticket = form.querySelector("select").value;

  // Create data object
  const data = {
    name: name,
    email: email,
    phone: phone,
    ticket: ticket
  };

  try {
    // Send data to backend
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.text();

    // Show success message
    alert(result);

    // Reset form
    form.reset();

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
