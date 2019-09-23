const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Agouhanna"
];

const result1 = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true, 'Agouhanna': true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 2);