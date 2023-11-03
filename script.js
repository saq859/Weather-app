// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');


// search.addEventListener('click' ,() => {
//     const APIKey = 'b95bc527fff890c8eba2058a249539db';
//     const city = document.querySelector ('.search-box input').value;

//     if (city == '')
//     return;
// fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API key}')
// .then(response => response.json()).then(json => {
//     const image = document.querySelector('.weather-box i');
//     const temperature = document.querySelector('.weather-box .temperature');
//     const description = document.querySelector('.weather-box .description');
//     const humidityn = document.querySelector('.weather-box .humidity span');
//     const Wind  = document.querySelector('.weather-box .Wind span');

//     switch (json.weather[0].main) {
//         case 'clear':
//             <i class="fa-solid fa-cloud-sun" style="color: #ffd43b;"></i>;
//             break;
    
//             case 'rain':
//                 <i class="fa-solid fa-cloud-rain" style="color: #92bde3;"></i>;
//             break;

//             case 'snow':
//                 <i class="fa-solid fa-cloud-meatball" style="color: #d9edf2;"></i>;
//             break;

//             case 'clouds':
//                 <i class="fa-solid fa-cloud" style="color: #afbfd9;"></i>;
//             break;

//             case 'mist':
//                image.src='mist.png';
//             break;


//         default:
//             <i class="fa-solid fa-cloud-sun" style="color: #ffd43b;"></i>;
//             break;
//     }
// })
// });




// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click', () => {
//     const APIKey = 'b95bc527fff890c8eba2058a249539db';
//     const city = document.querySelector('.search-box input').value;

//     if (city === '') return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {
//             const image = document.querySelector('.weather-box i');
//             const temperature = document.querySelector('.weather-box .temperature');
//             const description = document.querySelector('.weather-box .description');
//             const humidity = document.querySelector('.weather-box .humidity span');
//             const wind = document.querySelector('.weather-box .wind span');

//             switch (json.weather[0].main) {
//                 case 'Clear':
//                     <i class="fa-solid fa-sun" style="color: #f9d806;"></i>
//                     break;

//                 case 'Rain':
//                     image.innerHTML = '<i class="fas fa-cloud-rain" style="color: #92bde3;"></i>';
//                     break;

//                 case 'Snow':
//                     image.innerHTML = '<i class="fas fa-snowflake" style="color: #d9edf2;"></i>';
//                     break;

//                 case 'Clouds':
//                     image.innerHTML = '<i class="fas fa-cloud" style="color: #afbfd9;"></i>';
//                     break;

//                 case 'Mist':
//                     image.src = 'mist.png';
//                     break;


//                     case 'Haze':
//                         image.src = 'mist.png';
//                         break;

//                 default:
//                     <i class="fa-solid fa-cloud-sun" style="color: #ffd43b;"></i>;

//         });
// });



// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click', () => {
//     const APIKey = 'b95bc527fff890c8eba2058a249539db';
//     const city = document.querySelector('.search-box input').value;

//     if (city === '') return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {
//             const image = document.querySelector('.weather-box img');
//             const temperature = document.querySelector('.weather-box .temperature');
//             const description = document.querySelector('.weather-box .description');
//             const humidity = document.querySelector('.weather-box .humidity span');
//             const wind = document.querySelector('.weather-box .wind span');

//             switch (json.weather[0].main) {
//                 case 'Clear':
//                    image.src= 'clear.png';
//                     break;

//                 case 'Rain':
//                     image.src= 'rain.png';
//                     break;

//                 case 'Snow':
//                     image.src= 'snow.png';
//                     break;

//                 case 'Clouds':
//                     image.src= 'clouds.png';
//                     break;

//                 case 'Mist':
//                     image.src = 'mist.png';
//                     break;

//                 case 'Haze':
//                     image.src = 'haze.png'; 
//                     break;

//                 default:
//                     image.src= 'sunny.png';
//                 }
// temperature.innerHTML =`${parseInt(json.main.temp)}<span>°C</span>`;
// description.innerHTML =`${json.weather[0].description}`;
// humidity.innerHTML =`${json.main.humidity}% `;
// Wind.innerHTML =`${parseInt(json.Wind.speed)}Km/h`;

//         });
// });
// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');
// const error404 = document.querySelector('.not-found');
// const cityHide = document.querySelector('.city-hide');

// search.addEventListener('click', () => {
//     const APIKey = 'b95bc527fff890c8eba2058a249539db';
//     const city = document.querySelector('.search-box input').value;

//     if (city === '') return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {
//             if(json.cod == '404'){
//                 // cityHide.textContent = city;
//                 container.style.height = '400px';
//                 // container.classList.add ('.active');
//                 error404.classList.add('active');
//                 weatherDetails.classList.remove('active');
//                 weatherBox.classList.remove('active');
//                 return;
//             }
//             container.style.height = '555px';
//             error404.classList.remove('active');
//             weatherDetails.classList.add('active');
//             weatherBox.classList.add('active');



//             const image = document.querySelector('.weather-box img');
//             const temperature = document.querySelector('.weather-box .temperature');
//             const description = document.querySelector('.weather-box .description');
//             const humidity = document.querySelector('.info-humidity span'); // Corrected selector
//             const wind = document.querySelector('.info-wind span'); // Corrected selector

// if(cityHide.textContent == city){
//     return;
// }
// else{
//     cityHide.textContent = city;

//     container.style.height = '555px';
//     container.classList.add=('active');
//     error404.classList.remove('active');
//     weatherDetails.classList.add('active');
//     weatherBox.classList.add('active');


// }
// setTimeout(() => {
//     container.classList.remove=('active');
// }, 2500);




//             switch (json.weather[0].main) {
//                 case 'Clear':
//                     image.src = 'clear.png';
//                     break;

//                 case 'Rain':
//                     image.src = 'rain.png';
//                     break;

//                 case 'Snow':
//                     image.src = 'snow.png';
//                     break;

//                 case 'Clouds':
//                     image.src = 'clouds.png';
//                     break;

//                 case 'Mist':
//                     image.src = 'mist.png';
//                     break;

//                 case 'Haze':
//                     image.src = 'haze.png';
//                     break;

//                 default:
//                     image.src = 'clear.png';
//             }

//             temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//             description.innerHTML = json.weather[0].description;
//             humidity.innerHTML = `${json.main.humidity}%`;
//             wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`; // Corrected variable name
//         });
// });

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    const APIKey = 'b95bc527fff890c8eba2058a249539db';
    const cityInput = document.querySelector('.search-box input');
    const city = cityInput.value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                // cityHide.textContent = city;
                container.style.height = '400px';
                error404.classList.add('active');
                weatherDetails.classList.remove('active');
                weatherBox.classList.remove('active');
            }
            
           
            
            
            else {
                // cityHide.textContent = city;
                container.style.height = '555px';
                container.classList.add('active');
                error404.classList.remove('active');
                weatherDetails.classList.add('active');
                weatherBox.classList.add('active');

                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.info-humidity span');
                const wind = document.querySelector('.info-wind span');

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'clear.png';
                        break;
                    case 'Rain':
                        image.src = 'rain.png';
                        break;
                    case 'Snow':
                        image.src = 'snow.png';
                        break;
                    case 'Clouds':
                        image.src = 'clouds.png';
                        break;
                    case 'Mist':
                        image.src = 'mist.png';
                        break;
                    case 'Haze':
                        image.src = 'haze.png';
                        break;
                    default:
                        image.src = 'clear.png';
                }

                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                description.innerHTML = json.weather[0].description;
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
            }

            // setTimeout(() => {
            //     container.classList.remove('active');
            // }, 25000);
        });
});
