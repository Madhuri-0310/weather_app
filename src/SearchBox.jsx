import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_KEY = "b3900eb8d0cbcddcdb6ec8411be01bfa";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // Fetch weather info for the entered city
  const getWeatherInfo = async () => {
    const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await res.json();

    // Handle invalid city or API error
    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInfo = await getWeatherInfo(); // Fetch first
      updateInfo(newInfo);                    // Update parent component
      setCity("");                            // Clear input after success
      setError(false);                        // Reset error on success
    } catch (err) {
      setError(true);                         // Show error message
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setError(false); // Reset error when typing
          }}
          required
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{ color: "red" }}>City not found!</p>}
      </form>
    </div>
  );
}



