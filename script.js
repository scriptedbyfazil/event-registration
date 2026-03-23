/* General */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1d2b64, #f8cdda);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Main Container */
.container {
  text-align: center;
  width: 90%;
  max-width: 500px;
}

/* Title */
h1 {
  color: white;
  font-weight: 600;
  margin-bottom: 5px;
}

.tagline {
  color: #f0f0f0;
  margin-bottom: 20px;
  font-size: 14px;
}

/* Cards */
.card {
  background: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Headings */
h2 {
  margin-bottom: 10px;
  font-weight: 500;
}

/* Text */
p {
  font-size: 14px;
  line-height: 1.5;
}

/* Form */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Inputs (smaller and centered) */
input, select {
  width: 70%;
  padding: 8px;
  margin: 6px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 13px;
}

/* Button */
button {
  width: 70%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  background: #1d2b64;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #0f1b46;
}
