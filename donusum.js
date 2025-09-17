const donusumler = [
  // --- Ağırlık ---
  { from_key: "Kilogram", to_key: "Gram", calculator: (value) => value * 1000 },
  {
    from_key: "Kilogram",
    to_key: "Pound",
    calculator: (value) => value * 2.205,
  },

  {
    from_key: "Gram",
    to_key: "Kilogram",
    calculator: (value) => value * 0.001,
  },
  {
    from_key: "Gram",
    to_key: "Pound",
    calculator: (value) => value * 0.00220462262,
  },

  {
    from_key: "Pound",
    to_key: "Kilogram",
    calculator: (value) => value * 0.454,
  },
  {
    from_key: "Pound",
    to_key: "Gram",
    calculator: (value) => value * 453.59237,
  },

  // --- Uzunluk ---
  {
    from_key: "Metre",
    to_key: "Santimetre",
    calculator: (value) => value * 100,
  },
  {
    from_key: "Metre",
    to_key: "Fit",
    calculator: (value) => value * 3.2808399,
  },
  {
    from_key: "Metre",
    to_key: "İnç",
    calculator: (value) => value * 39.37007874,
  },

  {
    from_key: "Santimetre",
    to_key: "Metre",
    calculator: (value) => value * 0.01,
  },
  {
    from_key: "Santimetre",
    to_key: "İnç",
    calculator: (value) => value * 0.3937007874,
  },
  {
    from_key: "Santimetre",
    to_key: "Fit",
    calculator: (value) => value * 0.032808399,
  },

  { from_key: "Fit", to_key: "Metre", calculator: (value) => value * 0.3048 },
  {
    from_key: "Fit",
    to_key: "Santimetre",
    calculator: (value) => value * 30.48,
  },
  { from_key: "Fit", to_key: "İnç", calculator: (value) => value * 12 },

  { from_key: "İnç", to_key: "Metre", calculator: (value) => value * 0.0254 },
  { from_key: "İnç", to_key: "Fit", calculator: (value) => value * (1 / 12) },
  {
    from_key: "İnç",
    to_key: "Santimetre",
    calculator: (value) => value * 2.54,
  },

  // --- Hacim ---
  {
    from_key: "Litre",
    to_key: "Mililitre",
    calculator: (value) => value * 1000,
  },
  {
    from_key: "Litre",
    to_key: "Galon",
    calculator: (value) => value * 0.264172052,
  },

  {
    from_key: "Mililitre",
    to_key: "Litre",
    calculator: (value) => value * 0.001,
  },
  {
    from_key: "Mililitre",
    to_key: "Galon",
    calculator: (value) => value * 0.000264172052,
  },

  {
    from_key: "Galon",
    to_key: "Litre",
    calculator: (value) => value * 3.785411784,
  },
  {
    from_key: "Galon",
    to_key: "Mililitre",
    calculator: (value) => value * 3785.411784,
  },

  // --- Sıcaklık ---
  {
    from_key: "Santigrat",
    to_key: "Fahrenheit",
    calculator: (value) => (value * 9) / 5 + 32,
  },
  {
    from_key: "Fahrenheit",
    to_key: "Santigrat",
    calculator: (value) => ((value - 32) * 5) / 9,
  },

  {
    from_key: "Santigrat",
    to_key: "Kelvin",
    calculator: (value) => value + 273.15,
    //
  },
  {
    from_key: "Kelvin",
    to_key: "Santigrat",
    calculator: (value) => value - 273.15,
  },

  {
    from_key: "Fahrenheit",
    to_key: "Kelvin",
    calculator: (value) => ((value - 32) * 5) / 9 + 273.15,
    //
  },
  {
    from_key: "Kelvin",
    to_key: "Fahrenheit",
    calculator: (value) => ((value - 273.15) * 9) / 5 + 32,
  },
];
