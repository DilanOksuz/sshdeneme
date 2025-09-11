const CATEGORIES = {
  weight: ["kg", "g", "lb"],
  lenght: ["m", "cm", "ft", "in"],
  temperature: ["c", "f", "k"],
  volume: ["l", "ml", "gal"]
};

function setSelectionValue(selectElement) {
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("ToUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    const selectedValue = CATEGORIES[selectElement.value];

    selectedValue.forEach((element) => {
        const fromOption = document.createElement("option");
        fromOption.value = element;
        fromOption.innerText = element;

        const toOption = document.createElement("option");
        toOption.value = element;
        toOption.innerText = element;

        fromUnit.appendChild(fromOption);
        toUnit.appendChild(toOption);
    });

    
}