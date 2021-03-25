// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');

// Foursquare API Info
 const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
 const clientSecret='4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';

// WEATHER API Info

const apiKey = "2082573baa2c88e4ee84edd0044c8192";
const url = "https://api.foursquare.com/v2/venues/explore?near="
const weatherUrl = "http://api.weatherstack.com/current?access_key="

// Add AJAX functions here:


const getVenues = async () => {
  const city = inputField.value;
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20210324`;
    console.log(urlToFetch)
    try {
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
			console.log(jsonResponse)
        } else {
            throw new Error("something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
}
//getVenues()

//submitBtn.onclick=()=>getVenues();

const getForecast = async () => {
	const urlToFetch = `${weatherUrl}${apiKey}&query=${inputField.value}`
	try{
		const response =await fetch (urlToFetch);
		if(response.ok){
			const jsonResponse = await response.json();
		}
	}catch(err){console.log(err)}
  
}






// Execute function
