const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); 

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const ticket = document.getElementById("ticketType").value;

  const data = {
    name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    ticket: ticket
  };

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.text();

    alert(result);

    form.reset();

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
