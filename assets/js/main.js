

let a = "John";
let b = 3.14;
let c = NaN;
let d = false;
let e = [1, 2, 3, 4];
let f = { name: 'John', age: 34 };
let g = new Date();
let h = function () { };
let i = null;
let j = "";
let k = 3 + 2 == 5;
let l = 3 + "3";

console.log(a + " ist vom Typ: " + typeof (a));
console.log(b + " ist vom Typ: " + typeof (b));
console.log(c + " ist vom Typ: " + typeof (c));
console.log(d + " ist vom Typ: " + typeof (d));
console.log(e + " ist vom Typ: " + typeof (e));
console.log(f + " ist vom Typ: " + typeof (f));
console.log(g + " ist vom Typ: " + typeof (g));
console.log(h + " ist vom Typ: " + typeof (h));
console.log(i + " ist vom Typ: " + typeof (i));
console.log(j + " ist vom Typ: " + typeof (j));
console.log(k + " ist vom Typ: " + typeof (k));
console.log(l + " ist vom Typ: " + typeof (l));


let x = 20;
let y = 30;
let z = 10;

console.log("X + Y = " + (x + y));
console.log("Y - X = " + (y - x));
console.log("X - Y = " + (x - y));
console.log("X * Y = " + (x * y));
console.log("X / Y = " + (x / y));

let resultOne = (x * y) / z;
console.log("X * Y / Z= " + resultOne);

let aa = 15;
let bb = 9;
let cc = 20;

console.log("Der Rest der Division von a/b ist: " + (aa % bb));

let resultTwo = (aa + bb) * cc;
console.log("A+B*c = " + resultTwo);

aa++;
console.log("A Wert inkrementiert: " + aa);

bb--;
console.log("B Wert dekrementiert: " + bb);

let resultThree = bb - aa;
console.log("Der Rest der Division von resultOne durch resultTwo ist: " + (resultOne % resultTwo));
