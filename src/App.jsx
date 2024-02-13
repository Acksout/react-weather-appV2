import React, { useState, useEffect } from "react";
import { TextField, Typography, Container } from "@mui/material";

function App() {
  const [currentTemp, setCurrentTemp] = useState(0);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=513fd790b796317574c291f6b55d47bb`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCurrentTemp(data.main.temp - 273.15);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [cityName]);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Weather
      </Typography>
      <TextField
        id="textInput"
        label="Input City Name"
        variant="outlined"
        value={cityName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Typography variant="body1" gutterBottom>
        Current City: {cityName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Current Temperature: {String(currentTemp).slice(0, 5)}°C
      </Typography>
    </Container>
  );
}

export default App;
