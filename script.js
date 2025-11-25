document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("status").innerText = "✅ Message sent successfully!";
    this.reset();
  } else {
    document.getElementById("status").innerText = "❌ Please fill all fields.";
  }
});
