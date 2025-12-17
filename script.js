/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  line-height: 1.6;
  color: #333;
}

/* Hero Section */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-content h1 span {
  display: inline-block;
  animation: fadeIn 2s ease-in-out infinite alternate;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn {
  text-decoration: none;
  padding: 12px 30px;
  background-color: #fff;
  color: #2575fc;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
  background-color: #f0f0f0;
}

/* Services Section */
.services {
  padding: 80px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #2575fc;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.card h3 {
  margin-bottom: 15px;
  color: #6a11cb;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background-color: #2575fc;
  color: #fff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .service-cards {
    flex-direction: column;
    align-items: center;
  }
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-10px);}
  100% { opacity: 1; transform: translateY(0);}
}
