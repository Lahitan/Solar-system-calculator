const mass = document.querySelector("#mass");
const gravityValue = document.querySelector("select");
const calButton = document.querySelector("#cal-button");
const resultElement = document.querySelector(".description");
const planetImage = document.querySelector(".planet-image");
const main = document.querySelector("main")

const planets = {
    mercury: { gravity: 3.7, image: './images/mercury.png' },
    venus: { gravity: 8.9, image: './images/venus.png' },
    earth: { gravity: 9.8, image: './images/earth.png' },
    mars: { gravity: 3.7, image: './images/mars.png' },
    jupiter: { gravity: 24.8, image: './images/jupiter.png' },
    saturn: { gravity: 10.4, image: './images/saturn.png' },
    uranus: { gravity: 9.0, image: './images/uranus.png' },
    neptune: { gravity: 11.5, image: './images/neptune.png' },
    pluto: { gravity: 0.7, image: './images/pluto.png' }
};

calButton.addEventListener('click', function() {
    const massValue = parseFloat(mass.value);
    const selectedPlanet = gravityValue.value;
    
    planetImage.style.display = "none";

    if (!massValue) {
        resultElement.textContent = "Mass required";
        resultElement.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        main.style.display = "block"
        return;
    }
    
    if (selectedPlanet === 'none') {
        resultElement.textContent = "Select a planet";
        resultElement.style.backgroundColor = "rgba(255, 0, 0, 0.2)"; 
        main.style.display = "block"
        return;
    }

    // Get gravity and image of the selected planet
    const { gravity, image } = planets[selectedPlanet];

    // Calculate the weight
    const result = massValue * gravity;
  

    planetImage.src = image;
    planetImage.style.display = "block"; 
    main.style.display = "block"
    

    // Update the result and the planet's image
    resultElement.innerHTML = `The weight of the object on ${selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)} is <strong>${result.toFixed(2)}</strong>  N.`;
    resultElement.style.backgroundColor = "rgba(4, 4, 76, 0.753)";
});

