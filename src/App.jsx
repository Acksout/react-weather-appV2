import React, { useEffect, useState } from "react";
import { Container, TextField, Typography } from "@mui/material";

function App() {
    const [currentTemp, setCurrentTemp] = useState(0);
    const [cityName, setCityName] = useState("");
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCurrentTemp(data.main.temp - 273.15);
            } catch (error) {
                console.error("Wrong city name maybe?");
            }
        };

        if (cityName) {
            fetchData();
        }
    }, [cityName, apiKey]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setCityName(event.target.value);
        }
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
                onKeyDown={handleKeyDown}
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
