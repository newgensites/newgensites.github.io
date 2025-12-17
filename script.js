* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #0f0f0f;
  color: white;
}

.hero {
  height: 100vh;
  background: linear-gradient(135deg, #111, #222);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  animation: fadeDown 1.5s ease;
}

.hero-content p {
  margin: 15px 0;
  font-size: 1.2rem;
  animation: fadeUp 1.5s ease;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background: #ff9800;
  color: black;
  text-decoration: none;
  border-radius: 25px;
  transition: 0.3s;
}

.btn:hover {
  background: white;
}

section {
  padding: 60px 20px;
  text-align: center;
}

.services .service-box {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.services .service-box div {
  background: #1f1f1f;
  padding: 30px;
  border-radius: 10px;
  width: 200px;
}

footer {
  background: black;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
