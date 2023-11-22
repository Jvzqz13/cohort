function computeArea(w, h){
  console.log(`The area of a rectangle with a width of ${w} and a height of ${h} is ${w*h} square units.`);
}
computeArea(2, 5);

const planetHasWater = function(planet) {
  let p = planet.toLowerCase();
  if (p === "earth" || p === "mars"){
    return true;
  } else {
    return false;
  }
}