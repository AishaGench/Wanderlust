const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
const destination = document.getElementById("destination");
const venueDivs = document.getElementById("venues");
const weatherDiv = document.getElementById("weather");


const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  const weatherContent = `
    <h2>${weekDays[(new Date()).getDay()]}</h2>
		<h2>Temperature: ${currentDay.current.temperature}&deg;C</h2>
		<h2>Condition: ${currentDay.current.weather_descriptions[0]}</h2>
    <img src="${currentDay.current.weather_icons[0]}">`;
    weatherDiv.innerHTML=weatherContent;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

const createVenuesHTML = (data) => {
  
  destination.innerHTML =`<h2>${data[0].venue.location.city}</h2>`;
  data.forEach((item, index) => {
    const venueIcon = item.venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    const venueContent = `
    <div class="venue" id="venue${index}">
      <h2>${item.venue.name}</h2>
      <img class="venueimage" src="${venueImgSrc}"/>
      <h3>Address:</h3>
      <p>${item.venue.location.address}</p>
      <p>${item.venue.location.city}</p>
      <p>${item.venue.location.country}</p>
    </div>`;
    venueDivs.innerHTML=venueContent;
});
}
