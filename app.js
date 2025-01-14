
responseField = document.querySelector(".response");

var SeverData = new Object();

//TODO comment this function
function hitAPI(city) {
  


  url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup=metric&key=9RUB53JMA57E5NEEXAKHNBRKF&contentType=json";
  fetch(url, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    //problem bit, get the api response stored outside this scope
    console.log(response);
    
    //display using output div
    responseField.innerHTML = response.description;
    
  });

  
}



//text field code
cityField = document.querySelector(".cityField");

//button code
forecastBtn = document.querySelector(".forecastBtn");

function Forecast() {
  //gets city entered in the city filed
  city = cityField.value

  hitAPI(city);
  //response dump
  console.log(SeverData);

}

forecastBtn.addEventListener("click", Forecast);


  
