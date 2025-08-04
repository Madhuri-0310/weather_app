🌤 React Weather App
A simple and responsive Weather App built with React.js and Material-UI (MUI) that fetches real-time weather data using the OpenWeatherMap API.

🚀 Features
🌎 Search any city to get its current weather

🌡 Displays temperature, humidity, min & max temperatures

☀️ Dynamic weather icons & background images based on weather conditions

📱 Responsive design with Material-UI

❌ Error handling for invalid city names

🛠️ Tech Stack
React.js (Vite or CRA)

Material-UI (MUI)

JavaScript (ES6+)

OpenWeatherMap API

CSS3

📦 Installation & Setup
1. Clone the repository


    git clone https://github.com/your-username/weather-app.git
    cd weather-app
2. Install dependencies

    npm install
3. Get your OpenWeatherMap API Key

    Sign up on OpenWeatherMap

    Generate a free API key

    Replace the placeholder in SearchBox.jsx:


    const API_KEY = "your_api_key_here";
4. Run the development server


    npm run dev
    or if using CRA:


    npm start

⚡ How It Works
User enters a city name in the search box.

App sends a fetch request to the OpenWeatherMap API.

The response updates the InfoBox component with live weather data.

Shows dynamic background images & icons based on temperature and humidity.

📌 Future Improvements
🌤 5-day weather forecast

🗺 Map integration with city location

🌐 Multi-language support

👨‍💻 Author
Thota Sai Madhuri

🌐 GitHub