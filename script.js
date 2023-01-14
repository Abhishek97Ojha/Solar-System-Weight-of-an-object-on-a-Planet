const planets = [
    { planetName: "Sun", gravity: 27.9, image: "images/sun.png" },
    { planetName: "Moon", gravity: 0.166, image: "images/moon.png" },
    { planetName: "Mercury", gravity: 0.378, image: "images/mercury.png" },
    { planetName: "Venus", gravity: 0.907, image: "images/venus.png" },
    { planetName: "Earth", gravity: 1, image: "images/earth.png" },
    { planetName: "Mars", gravity: 0.377, image: "images/mars.png" },
    { planetName: "Jupiter", gravity: 2.36, image: "images/jupiter.png" },
    { planetName: "Saturn", gravity: 0.916, image: "images/saturn.png" },
    { planetName: "Uranus", gravity: 0.889, image: "images/uranus.png" },
    { planetName: "Neptune", gravity: 1.12, image: "images/neptune.png" },
]
let planetName = document.getElementById("planetName");
let planet = document.getElementById("planets");
let weight = document.getElementById("weight");
planets.map((ele) => {
    let option = document.createElement("option");
    option.value = ele.gravity;
    option.innerText = ele.planetName;
    option.setAttribute("name", ele.image)
    planet.appendChild(option);
    // console.log(option);
})
function calculateWeight() {
    var planet = document.getElementById("planets");
    var mass = document.getElementById("mass");
    console.log(mass);
    let select = planet.selectedIndex;
    let selected = planet.options[select]
    console.log(selected);
    let down = document.getElementById("down");
    let name = selected.innerText;
    if (mass.value == "" || mass.value <= 0 || /^[A-Za-z]*$/.test(mass.value) == true) {
        down.innerHTML =
            `<div class="container">
                  <p class="error">Please Input Mass in digits greater than 0</p>
               </div>`
    }
    else if (planet.value == "") {
        down.innerHTML =
            `<div class="container">
                  <p class="text">Please Select Planet</p>
               </div>`

    }
    else {
        if (mass.value != "" && mass.value > 0 && /^[A-Za-z]*$/.test(mass.value) == false && planet.value != "") {
            let result = mass.value * selected.value;
            let planetImage = selected.getAttribute("name");
            console.log(planetImage);
            down.innerHTML =
                `<div class="container">
            <img src=${planetImage} alt="" id="image">
            <div class="text">
               <div class="para">
                  <p>The weight of object on </p>
                  <h3 id="planetName">${name}</h3>
              </div>
              <div class="weight">
                  <h2 id="weight">${result}Kg</h2>
              </div>
            </div>
        </div>`;
            mass.value = "";
            planet.value = "";

        }


    }


}