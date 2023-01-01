const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '952ad59009msh2734f4ee001fbfbp1efa2fjsnf0e979f5e22e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweather=(city)=>{
	cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response. temp
feels_like.innerHTML=response.feels_like

humidity.innerHTML = response. humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response. sunrise
sunset.innerHTML=response.sunset








   let dateObj = new Date(response.sunrise * 1000); 

   let hours = dateObj.getUTCHours().toString().padStart(2,0);
   let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
   let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

   sunrise.innerHTML = `${hours}:${minutes}:${seconds}`;


   let dateObj1 = new Date(response.sunset * 1000); 

   let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
   let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
   let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

   sunset.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));}
	submit.addEventListener("click",(e)=>{
		e.preventDefault()
getweather(city.value)
	})
getweather("Delhi")



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			
temp_del.innerHTML = response. temp
feels_like_del.innerHTML=response.feels_like

humidity_del.innerHTML = response. humidity
min_temp_del.innerHTML = response.min_temp
max_temp_del.innerHTML = response.max_temp
wind_speed_del.innerHTML = response.wind_speed
wind_degrees_del.innerHTML = response.wind_degrees
sunrise_del.innerHTML = response. sunrise
sunset_del.innerHTML=response.sunset



let dateObj = new Date(response.sunrise * 1000); 

let hours = dateObj.getUTCHours().toString().padStart(2,0);
let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

sunrise_del.innerHTML = `${hours}:${minutes}:${seconds}`;


let dateObj1 = new Date(response.sunset * 1000); 

let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

sunset_del.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			
temp_mum.innerHTML = response. temp
feels_like_mum.innerHTML=response.feels_like

humidity_mum.innerHTML = response. humidity
min_temp_mum.innerHTML = response.min_temp
max_temp_mum.innerHTML = response.max_temp
wind_speed_mum.innerHTML = response.wind_speed
wind_degrees_mum.innerHTML = response.wind_degrees
sunrise_mum.innerHTML = response. sunrise
sunset_mum.innerHTML=response.sunset


let dateObj = new Date(response.sunrise * 1000); 

let hours = dateObj.getUTCHours().toString().padStart(2,0);
let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

sunrise_mum.innerHTML = `${hours}:${minutes}:${seconds}`;


let dateObj1 = new Date(response.sunset * 1000); 

let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

sunset_mum.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			
temp_kol.innerHTML = response. temp
feels_like_kol.innerHTML=response.feels_like

humidity_kol.innerHTML = response. humidity
min_temp_kol.innerHTML = response.min_temp
max_temp_kol.innerHTML = response.max_temp
wind_speed_kol.innerHTML = response.wind_speed
wind_degrees_kol.innerHTML = response.wind_degrees
sunrise_kol.innerHTML = response. sunrise
sunset_kol.innerHTML=response.sunset


let dateObj = new Date(response.sunrise * 1000); 

let hours = dateObj.getUTCHours().toString().padStart(2,0);
let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

sunrise_kol.innerHTML = `${hours}:${minutes}:${seconds}`;


let dateObj1 = new Date(response.sunset * 1000); 

let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

sunset_kol.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida', options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			
temp_noi.innerHTML = response. temp
feels_like_noi.innerHTML=response.feels_like

humidity_noi.innerHTML = response. humidity
min_temp_noi.innerHTML = response.min_temp
max_temp_noi.innerHTML = response.max_temp
wind_speed_noi.innerHTML = response.wind_speed
wind_degrees_noi.innerHTML = response.wind_degrees
sunrise_noi.innerHTML = response. sunrise
sunset_noi.innerHTML=response.sunset



let dateObj = new Date(response.sunrise * 1000); 

let hours = dateObj.getUTCHours().toString().padStart(2,0);
let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

sunrise_noi.innerHTML = `${hours}:${minutes}:${seconds}`;


let dateObj1 = new Date(response.sunset * 1000); 

let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

sunset_noi.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));




	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurugram', options)
	.then(response => response.json())
	.then(response => 
		{
			console.log(response)

			
temp_gug.innerHTML = response. temp
feels_like_gug.innerHTML=response.feels_like

humidity_gug.innerHTML = response. humidity
min_temp_gug.innerHTML = response.min_temp
max_temp_gug.innerHTML = response.max_temp
wind_speed_gug.innerHTML = response.wind_speed
wind_degrees_gug.innerHTML = response.wind_degrees
sunrise_gug.innerHTML = response. sunrise
sunset_gug.innerHTML=response.sunset


let dateObj = new Date(response.sunrise * 1000); 

let hours = dateObj.getUTCHours().toString().padStart(2,0);
let minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
let seconds = dateObj.getUTCSeconds().toString().padStart(2,0);

sunrise_gug.innerHTML = `${hours}:${minutes}:${seconds}`;


let dateObj1 = new Date(response.sunset * 1000); 

let hours1 = dateObj1.getUTCHours().toString().padStart(2,0);
let minutes1 = dateObj1.getUTCMinutes().toString().padStart(2,0);
let seconds1 = dateObj1.getUTCSeconds().toString().padStart(2,0);

sunset_gug.innerHTML = `${hours1}:${minutes1}:${seconds1}`;

		})
	.catch(err => console.error(err));