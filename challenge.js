// Lasagne Master challenge

// Variables
let timer;
let result = "";
let layers = ["meat", "pasta", "sauce", "meat", "pasta", "sauce", "mozzarella"];
let prepTime;
const pastaWeightPerLayer = 50;
const sauceVolumePerLayer = 0.2;

// Function to check if lasagne is finished cooking
function cookingStatus(timer) {
  if (timer == 0) {
    result = "Lasagne is done";
  } else if (timer > 0) {
    result = "Not done, please wait.";
  } else {
    result = "You forgot to set the timer!";
  }
  return result;
}

// Function to estimate preparation time
function preparationTime(layers, minutes) {
  prepTime = layers.length * minutes;
  return prepTime;
}

// Function to compute pasta and sauce required
function quantities(layers) {
  for (i = 0; i < layers.length; i++)
    if (layers[i] == "pasta") {
      pastaCount += 1;
    } else if (layers[i] == "sauce") {
      sauceCount += 1;
    }
  pastaRequired = pastaCount * pastaWeightPerLayer;
  sauceRequired = sauceCount * sauceVolumePerLayer;
  quantObj = { pasta: pastaRequired, sauce: sauceRequired };
  return quantObj;
}

// Function to add secret ingredient
function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList.pop();
  myList.push(secretIngredient);
}

// Function to scale recipe
function scaleRecipe(recipe, portions) {
  // scaledRecipe = recipe; INCORRECT - causes original object to be modified
  scaledRecipe = Object.assign({}, recipe); // ref. https://stackoverflow.com/questions/29050004/modifying-a-copy-of-a-javascript-object-is-causing-the-original-object-to-change
  scaleFactor = portions / 2;
  scaledRecipe.pasta = scaledRecipe.pasta * scaleFactor;
  scaledRecipe.sauce = scaledRecipe.sauce * scaleFactor;
  scaledRecipe.mozzarella = scaledRecipe.mozzarella * scaleFactor;
  scaledRecipe.meat = scaledRecipe.meat * scaleFactor;
  return scaledRecipe;
}

// Check cooking status
timer = prompt("What is the number on the timer?"); // test examples: 0, 3, ?
timer = parseInt(timer);
cookingStatus(timer);
console.log(result);

// Determine preparation time
let minutes = prompt("How many minutes will each layer take you to prepare?");
preparationTime(layers, parseInt(minutes));
console.log(`Preparation time is ${prepTime} minutes`);

// Compute pasta and sauce required
let pastaCount = 0;
let sauceCount = 0;
let pastaRequired;
let sauceRequired;
let quantObj;
quantities(layers);
// output as an object
console.log(quantObj);
// OR output as a string literal sentence
console.log(
  `Pasta required is ${pastaRequired} grams and sauce required is ${sauceRequired} litres`
);

// Add secret ingredient
const friendsList = ["meat", "pasta", "sauce", "mozzarella", "spicy pepper"];
const myList = ["meat", "pasta", "sauce", "mozzarella"];
addSecretIngredient(friendsList, myList);
console.log("Secret ingredient added");
console.log(myList);

// Scale recipe
const recipe = {
  pasta: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
let scaledRecipe;
let scaleFactor;

portions = prompt("How many people are you cooking for?");
portions = parseInt(portions);
scaleRecipe(recipe, portions);

console.log("Scaled recipe: \n");
console.log(scaledRecipe);
console.log("Original recipe: \n");
console.log(recipe);
