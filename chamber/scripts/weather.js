// Weather API for Cape Town Chamber of Commerce
document.addEventListener('DOMContentLoaded', () => {
    // Weather elements
    const weatherIcon = document.querySelector('#weather-icon');
    const currentTemp = document.querySelector('#current-temp');
    const weatherDesc = document.querySelector('#weather-desc');
    const forecastContainer = document.querySelector('#forecast-container');
  
    // Chamber location - Cape Town coordinates
    const chamberName = "Cape Town";
    const lat = -33.92; // Cape Town latitude
    const lon = 18.42; // Cape Town longitude
    const apiKey = '9e7fb81dd77b1664202c26520bb21050';
  
    // API URLs
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  
    // Fetch current weather
    async function fetchCurrentWeather() {
      try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
          const data = await response.json();
          displayCurrentWeather(data);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
        displayWeatherError();
      }
    }
  
    // Fetch forecast
    async function fetchForecast() {
      try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
          const data = await response.json();
          displayForecast(data);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
        displayForecastError();
      }
    }
  
    // Display current weather
    function displayCurrentWeather(data) {
      const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Using higher resolution icons
      const desc = capitalizeWords(data.weather[0].description);
      
      weatherIcon.setAttribute('src', iconSrc);
      weatherIcon.setAttribute('alt', desc);
      currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
      weatherDesc.textContent = desc;
    }
  
    // Display forecast
    function displayForecast(data) {
      // Clear existing forecast
      forecastContainer.innerHTML = '';
      
      // Get unique days (excluding today)
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Process forecast data to get next 3 days at noon
      const nextDays = {};
      let dayCount = 0;
      
      data.list.forEach(item => {
        const forecastDate = new Date(item.dt * 1000);
        const dateString = forecastDate.toDateString();
        const forecastHour = forecastDate.getHours();
        
        // Skip today and find noon forecasts (closest to 12)
        if (forecastDate.getDate() > today.getDate() || 
            forecastDate.getMonth() > today.getMonth() || 
            forecastDate.getFullYear() > today.getFullYear()) {
          
          // If we don't have this day yet, or this hour is closer to noon
          if (!nextDays[dateString] || 
              Math.abs(forecastHour - 12) < Math.abs(new Date(nextDays[dateString].dt * 1000).getHours() - 12)) {
            nextDays[dateString] = item;
          }
        }
      });
      
      // Sort days and take first 3
      const sortedDays = Object.values(nextDays).sort((a, b) => a.dt - b.dt).slice(0, 3);
      
      // Create forecast elements
      sortedDays.forEach(day => {
        const dayDate = new Date(day.dt * 1000);
        const dayName = dayDate.toLocaleDateString('en-US', { weekday: 'short' });
        const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const temperature = Math.round(day.main.temp);
        
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');
        
        forecastDay.innerHTML = `
          <p class="day-name">${dayName}</p>
          <img src="${iconSrc}" alt="${day.weather[0].description}" class="forecast-icon">
          <p class="forecast-temp">${temperature}&deg;F</p>
        `;
        
        forecastContainer.appendChild(forecastDay);
      });
    }
  
    // Handle errors
    function displayWeatherError() {
      currentTemp.innerHTML = "N/A";
      weatherDesc.textContent = "Weather data unavailable";
      if (weatherIcon) {
        weatherIcon.style.display = "none";
      }
    }
  
    function displayForecastError() {
      if (forecastContainer) {
        forecastContainer.innerHTML = "<p>Forecast unavailable</p>";
      }
    }
  
    // Helper function to capitalize words
    function capitalizeWords(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    }
  
    // Load weather data
    fetchCurrentWeather();
    fetchForecast();
  });