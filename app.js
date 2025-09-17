const CATEGORIES = {
  weight: ["Kilogram", "Gram", "Pound"],
  length: ["Metre", "Santimetre", "Fit", "İnç"],
  temperature: ["Santigrat", "Fahrenheit", "Kelvin"],
  volume: ["Litre", "Mililitre", "Galon"],
};

function resetAmountAndResult({ focus = true } = {}) {
  const amountInput = document.getElementById("amount");
  const resultElement = document.getElementById("result");
  if (!amountInput || !resultElement) return;
  amountInput.value = "";
  resultElement.innerText = "";
  if (focus) amountInput.focus();
}

function setSelectionValue(selectElement) {
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  const selectedValue = CATEGORIES[selectElement.value];
  if (!selectedValue) return;

  selectedValue.forEach((unitName) => {
    const fromOption = document.createElement("option");
    fromOption.value = unitName;
    fromOption.innerText = unitName;
    fromUnit.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = unitName;
    toOption.innerText = unitName;
    toUnit.appendChild(toOption);
  });

  if (toUnit.options.length > 1) toUnit.selectedIndex = 1;
  filterToUnitOptions();
  resetAmountAndResult();
}

function filterToUnitOptions() {
  const fromValue = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit");

  for (let i = 0; i < toUnit.options.length; i++) {
    const option = toUnit.options[i];
    const isSame = option.value === fromValue;
    option.disabled = isSame;
    if (isSame && option.selected) {
      toUnit.selectedIndex = i === 0 ? 1 : 0;
    }
  }
}

function swapUnits() {
  const fromSelect = document.getElementById("fromUnit");
  const toSelect = document.getElementById("toUnit");
  if (!fromSelect || !toSelect) return;

  const prevFrom = fromSelect.value;
  const prevTo = toSelect.value;

  fromSelect.value = prevTo;
  toSelect.value = prevFrom;

  filterToUnitOptions();
  convert();
}

function convert() {
  const amountInput = document.getElementById("amount");
  const resultElement = document.getElementById("result");
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  const raw = amountInput.value.trim();
  if (raw.includes("--")) {
    resultElement.innerText = "";
    return;
  }
  if (fromUnit === "Kelvin" && raw === "-") {
    amountInput.value = "";
    resultElement.innerText = "";
    return;
  }

  const amount = Number(raw);
  if (!Number.isFinite(amount)) {
    resultElement.innerText = "";
    return;
  }
  if (fromUnit === "Kelvin" && amount < 0) {
    amountInput.value = "";
    resultElement.innerText = "";
    return;
  }

  const conversion = donusumler.find(
    (item) => item.from_key === fromUnit && item.to_key === toUnit
  );

  if (conversion) {
    const result = conversion.calculator(amount);
    if (!Number.isFinite(result)) {
      resultElement.innerText = "";
      return;
    }
    resultElement.innerText = `${amount} ${fromUnit} = ${result} ${toUnit}`;
  } else {
    resultElement.innerText = "Bu dönüşüm mevcut değil.";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const category = document.getElementById("category");
  setSelectionValue(category);

  if (category) {
    category.addEventListener("change", (e) => setSelectionValue(e.target));
  }

  document.getElementById("fromUnit").addEventListener("change", () => {
    filterToUnitOptions();
    convert();
  });
  document.getElementById("toUnit").addEventListener("change", convert);

  const amountEl = document.getElementById("amount");

  amountEl.addEventListener("beforeinput", (e) => {
    if (e.inputType === "insertText" && e.data === "-") {
      const fromNow = document.getElementById("fromUnit").value;
      if (fromNow === "Kelvin") {
        e.preventDefault();
        return;
      }
      const start = amountEl.selectionStart ?? 0;
      const end = amountEl.selectionEnd ?? start;
      const willBe =
        amountEl.value.slice(0, start) + "-" + amountEl.value.slice(end);
      if (willBe.includes("--")) {
        e.preventDefault();
      }
    }
  });

  amountEl.addEventListener("paste", (e) => {
    const t = (e.clipboardData || window.clipboardData).getData("text");
    if (!t) return;
    const fromNow = document.getElementById("fromUnit").value;
    const start = amountEl.selectionStart ?? 0;
    const end = amountEl.selectionEnd ?? start;
    const willBe =
      amountEl.value.slice(0, start) + t + amountEl.value.slice(end);
    if (fromNow === "Kelvin" && t.includes("-")) {
      e.preventDefault();
      return;
    }
    if (/--/.test(willBe)) {
      e.preventDefault();
    }
  });

  amountEl.addEventListener("input", convert);

  const swapBtn = document.getElementById("swapBtn");
  if (swapBtn) {
    swapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      swapUnits();
    });
  }
});
