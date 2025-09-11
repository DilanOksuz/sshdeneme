const donusumler = [
  // weight
  { from_key: "kg", to_key: "g", calculator: (value) => value * 1000 },
  { from_key: "kg", to_key: "lb", calculator: (value) => value * 2.205 },

  { from_key: "g", to_key: "kg", calculator: (value) => value * 0.001 },
  { from_key: "g", to_key: "lb", calculator: (value) => value * 0.00220462262 },

  { from_key: "lb", to_key: "kg", calculator: (value) => value * 0.454 },
  { from_key: "lb", to_key: "g", calculator: (value) => value * 453.59237 },

  // --- length ---
  { from_key: "m", to_key: "cm", calculator: (value) => value * 100 },
  { from_key: "m", to_key: "ft", calculator: (value) => value * 3.2808399 },
  { from_key: "m", to_key: "in", calculator: (value) => value * 39.37007874 },

  { from_key: "cm", to_key: "m", calculator: (value) => value * 0.01 },
  { from_key: "cm", to_key: "in", calculator: (value) => value * 0.3937007874 },
  { from_key: "cm", to_key: "ft", calculator: (value) => value * 0.032808399 },

  { from_key: "ft", to_key: "m", calculator: (value) => value * 0.3048 },
  { from_key: "ft", to_key: "cm", calculator: (value) => value * 30.48 },
  { from_key: "ft", to_key: "in", calculator: (value) => value * 12 },

  { from_key: "in", to_key: "m", calculator: (value) => value * 0.0254 },
  { from_key: "in", to_key: "ft", calculator: (value) => value * (1 / 12) },
  { from_key: "in", to_key: "cm", calculator: (value) => value * 2.54 },

  // --- volume ---
  { from_key: "l", to_key: "ml", calculator: (value) => value * 1000 },
  { from_key: "l", to_key: "gal", calculator: (value) => value * 0.264172052 },

  { from_key: "ml", to_key: "l", calculator: (value) => value * 0.001 },
  {
    from_key: "ml",
    to_key: "gal",
    calculator: (value) => value * 0.000264172052,
  },

  { from_key: "gal", to_key: "l", calculator: (value) => value * 3.785411784 },
  { from_key: "gal", to_key: "ml", calculator: (value) => value * 3785.411784 },

  // --- temperature ---
  // Celsius <-> Fahrenheit
  { from_key: "c", to_key: "f", calculator: (value) => (value * 9) / 5 + 32 },
  { from_key: "f", to_key: "c", calculator: (value) => ((value - 32) * 5) / 9 },

  // Celsius <-> Kelvin
  { from_key: "c", to_key: "k", calculator: (value) => value + 273.15 },
  { from_key: "k", to_key: "c", calculator: (value) => value - 273.15 },

  // Fahrenheit <-> Kelvin
  {
    from_key: "f",
    to_key: "k",
    calculator: (value) => ((value - 32) * 5) / 9 + 273.15,
  },
  {
    from_key: "k",
    to_key: "f",
    calculator: (value) => ((value - 273.15) * 9) / 5 + 32,
  },
];
