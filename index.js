alert("Стандартный вид уравнения: \n aх²+bx+c=0");
var a = parseInt(prompt("Введите a", 1));
var b = parseInt(prompt("Введите b", 1));
var c = parseInt(prompt("Введите c", 1));
alert(a + "х²+" + b + "x+" + c + "=0");

function getDiscriminant(a, b, c) {
	return b * b - 4 * a * c;
}
var D = getDiscriminant(a, b, c);

function getRoot(a, b) {
	return (-b) / (2 * a);
}
var x = getRoot(a, b);

function getFirstRoot(a, b, c) {
    var D = getDiscriminant(a, b, c);
	return ((-b) - Math.sqrt(D)) / (2 * a);
}

var x1 = getFirstRoot(a, b);

function getSecondRoot(a, b, c) {
    var D = getDiscriminant(a, b, c);
	return ((-b) + Math.sqrt(D)) / (2 * a);
}
var x2 = getSecondRoot(a, b);
var result;

module.exports = {
    getDiscriminant,
    getRoot,
    getSecondRoot,
    getFirstRoot
}

if (D < 0) {
	alert("У данного уравнения нет корней");
} else {
	if (D === 0) {
		result = "x=" + x;
	} else {
		result = "x1=" + x1 + " x2=" + x2;
	}
}
if (D === 0 || D > 0) {
	alert(result);
}
if (D < 0) {
	result = "Ваше уравнение не имеет решений";
}
var resultText = "<h2>" + "Ваш ответ:" + "<br>" + result + "</h2>";
var example = "<h2>" + "Стандартный вид уравнения:" + "<br>" + "aх²+bx+c=0" + "</h2>";
var yourExample = "<h2>" + "Ваше уравнение:" + "<br>" + a + "х²+" + b + "x+" + c + "=0" + "</h2>";
var divElement = document.createElement("div");
divElement.innerHTML = example + yourExample + resultText;
document.body.style.fontWeight = "bold";
document.body.append(divElement);
