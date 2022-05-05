let countryArray = [];

async function getCountries(url) {
    try {
        let countries = await fetch(url);
        let jsonDAta = await countries.json();
        jsonDAta.forEach(element => {
            countryArray.push(element)});
    } catch (error) {
        console.error(error);
    }

    showCountries(countryArray);
}

let countryList = document.getElementById("country-list");
let searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", function (e) {
    let searchString = e.target.value.toLowerCase();
    let filteredCharacters = countryArray.filter(function (country) {
        return (
            country.name.toLowerCase().includes(searchString)
        );
    });
    showCountries(filteredCharacters);
    if (searchBar.value === "") {
        countryList.innerHTML = "";
    }
});	
    
function showCountries(countryArray) {
    let countryContainer = document.getElementById("country-container");
    countryContainer.innerText = "";
    for (let i = 0; i < countryArray.length; i++) {
        let div = document.createElement("div");
        div.classList.add("country-card");

        let countryName = document.createElement("h1");
        countryName.innerText = `LAND ${i}: ${countryArray[i].name.common}`

        let countryCapital = document.createElement("h3");
        countryCapital.innerText = `Hovedstad: ${countryArray[i].capital}`;
            if(countryArray[i].capital == undefined) {
                countryCapital = "Ingen hovedstad funnet!"
            }

        let countryPopulation = document.createElement("p");
        countryPopulation.innerText = `Populasjon: ${countryArray[i].population}`;

        let countryBorders = document.createElement("p");
        countryBorders.innerText = `Grenser: ${countryArray[i].borders}`;
            if (countryArray[i].borders == undefined) {
                countryBorders = "Ingen grenser funnet!"
            }


        let countryTimeZones = document.createElement("p");
        countryTimeZones.innerText = `Tidssoner: ${countryArray[i].timezones}`;

        let countryRegion = document.createElement("p");
        countryRegion.innerText = `Region: ${countryArray[i].region}`;
            if(countryArray[i].region == "Asia") {
                div.style.backgroundColor = "rgb(151, 184, 226)"}
            else if (countryArray[i].region == "Africa") {
                div.style.backgroundColor = "rgb(231, 168, 226)"}
            else if (countryArray[i].region == "Oceania") {
                div.style.backgroundColor = "rgb(107, 230, 134)"}
            else if (countryArray[i].region == "Americas") {
                div.style.backgroundColor = "rgb(231, 202, 140)"}
            else if (countryArray[i].region == "Antarctic") {
                div.style.backgroundColor = "yellow" }
            else if(countryArray[i].region == "Europe") {
                div.style.backgroundColor = "white"
            }
            
            

        div.append(countryName,countryCapital,countryPopulation,countryBorders,countryTimeZones,countryRegion);
        countryContainer.append(div);
    }
}
getCountries("https://restcountries.com/v3.1/all");

showCountries;
