// uitleg Array functies

//Array.at(index)
//Geeft het element op de opgegeven index terug. Ondersteunt ook negatieve indexen (vanaf het einde tellen).
const getal1 = [10, 20, 30, 40];
console.log(getal1.at(1)); // Output: 20
console.log(getal1.at(-1)); // Output: 40 (laatste element)

//Array.join(separator)
//Voegt alle elementen van de array samen tot een string, met een teken er een tussen
const getal2 = ["apple", "banana", "cherry"];
const getal3 = ["hallo", "wereld"];
console.log(getal3.join("-")); //output: hallo-wereld
console.log(getal2.join(" , ")); // Output: "apple, banana, cherry"

//Array.pop()
//Verwijdert het laatste element uit de array en retourneert het.
const getal4 = [1, 2, 3];
console.log(getal4.pop()); // Output: 3
console.log(getal4); // Output: [1, 2]

//Array.push(element1, element2, ...)
//Voegt een of meerdere elementen toe aan het einde van de array en retourneert de nieuwe lengte.
const getal5 = [1, 2, 3];
getal5.push(4, 5);
console.log(getal5); // Output: [1, 2, 3, 4, 5]

//Array.shift()
//Verwijdert het eerste element uit de array en retourneert het.
const getal6 = [1, 2, 3];
console.log(getal6.shift()); // Output: 1
console.log(getal6); // Output: [2, 3]

//Array.unshift(element1, element2, ...)
//Voegt een of meerdere elementen toe aan het begin van de array en retourneert de nieuwe lengte als gevraagt wordt.
const getal7 = [2, 3];
getal7.unshift(0, 1);
console.log(getal7); // Output: [0, 1, 2, 3]

//Array delete
//Verwijdert een element op een specifieke index, maar laat een lege plek (undefined) achter.
// dit is geen goede manier voor iets te verwijderen.
const getal8 = [1, 2, 3];
delete getal8[1];
console.log(getal8); // Output: [1, empty, 3]
console.log(getal8.length); // Output: 3 (de lengte blijft hetzelfde)

//Array.concat(array1, array2, ...)
//Voegt meerdere arrays samen in een nieuwe array zonder de originele arrays te veranderen.
const getal9 = [1, 2];
const getal10 = [3, 4];
const result = getal9.concat(getal10);
console.log(result); // Output: [1, 2, 3, 4]

//Array.copyWithin(target, start, end?)
//Kopieert een deel van de array naar een andere positie binnen dezelfde array.
const getal11 = [1, 2, 3, 4, 5];
i.copyWithin(1, 3);
console.log(getal11); // Output: [1, 4, 5, 4, 5]

//Array.flat(depth?)
//Maakt een geneste array "vlak", tot een bepaalde diepte.
const getal12 = [1, [2, [3, 4]]];
console.log(getal12.flat(2)); // Output: [1, 2, 3, 4]

//Array.splice(start, deleteCount, item1, item2, ...)
//Voegt of verwijdert elementen in een array.
const getal13 = [1, 2, 3, 4];
getal13.splice(1, 2, "a", "b");
console.log(getal13); // Output: [1, "a", "b", 4]

//Array.toSpliced(start, deleteCount, item1, item2, ...)
//Net als splice(), maar retourneert een nieuwe array zonder de originele array te veranderen.
const getal14 = [1, 2, 3, 4];
const getal15 = a.toSpliced(1, 2, "a", "b");
console.log(getal15); // Output: [1, "a", "b", 4]
console.log(getal14); // Output: [1, 2, 3, 4] (originele array blijft hetzelfde)

//Array.slice(start, end?)
//Retourneert een deel van de array zonder de originele array te wijzigen.
const getal16 = [1, 2, 3, 4];
console.log(getal16.slice(1, 3)); // Output: [2, 3]
console.log(getal16); // Output: [1, 2, 3, 4] (originele array blijft hetzelfde)
