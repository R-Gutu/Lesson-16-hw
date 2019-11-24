
function getDiscriminant(a, b, c) {
  return b * b - 4 * a * c;
}
  
function getRoot(a, b) {
  return (-b) / (2 * a);
}
  
function getFirstRoot(a, b, c) {
  var D = getDiscriminant(a, b, c);
  return ((-b) - Math.sqrt(D)) / (2 * a);
}
  
function getSecondRoot(a, b, c) {
  var D = getDiscriminant(a, b, c);
  return ((-b) + Math.sqrt(D)) / (2 * a);
}
module.exports = {
  getDiscriminant,
  getRoot,
  getSecondRoot,
  getFirstRoot
};
