let maVar = "ceci est une variable";

let semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
console.log(semaine);
console.log(semaine[2]);
console.log(semaine[1] + " " + semaine[5]);
console.log(semaine[7]);
console.log(`Ajd nous sommes ${semaine[0]} et demain nous serons ${semaine[3]}`);

// length permet de voir la longueur d'un tableau
console.log(semaine.length);

// push() permet de rajouter un élément en fin de tableau
semaine.push("jeudredi");
console.log(semaine);
// pop() permet de retirer un élément en fin de tableau
semaine.pop();
console.log(semaine);

// unshift() ajoute un élément en début de tableau
semaine.unshift("jeudredi");
console.log(semaine);
// shift() retire un élément en début de tableau
semaine.shift("jeudredi");
console.log(semaine);

// splice() permet de supprimer ou remplacer les éléments d'un tableau et comprend 3 arguments : 
// le premier spécifie la position de départ (où rajouter/remplacer)
// le deuxième spécifie combien d'éléments à remplacer
// le dernier spécifie ce qu'il faut ajouter/remplacer
semaine.splice(3, 0, "jeudredi");
console.log(semaine);

//join() concatène tous les éléments d'un tableau. Par défaut, le séprateur est une virgule, mais on peut le changer en le spécifiant dans les parenthèses de la méthode
semaine.join();
console.log(semaine.join(", "));

// slice() renvoie un nouveau tableau à partir d'une portion de notre tableau initial.
// le premier argument spécifie l'index de départ (inclus)
// le second argument spécifie l'index de fin (non-inclus)
console.log(semaine.slice(1,5));

// concat() fusionne deux tableaux et renvoie un nouveau tableau
let semaine2 = ["Sadimanche", "Mercredongue"];
let semaine3 = semaine.concat(semaine2);
console.log(semaine3);

// reverse() inverse le sens d'un tableau
console.log(semaine3.reverse());


// Exercice 1 :
let MyArray = ["coding 11", "coding 12", "coding 13"];

console.log(MyArray);

console.log(MyArray.length);

console.log(MyArray[0]);
console.log(MyArray[1]);
console.log(MyArray[2]);

// -------------------------------------

// Exercice 2 :
let MyArray2 = ["coding 17", "coding 18", "coding 19"];

console.log(MyArray2);

MyArray2.push("chris");
console.log(MyArray2);

// ------------------------------------

// Exercice 3 :
let MyArray3 = ["coding 17", "coding 18", "coding 19"];

console.log(MyArray3);

MyArray2.push("chris");
console.log(MyArray2);

MyArray3.splice(0,1, "chris");
console.log(MyArray3);

// ----------------------------------

//Exercice 4 :
let MyArray4 = ["coding 17", "coding 18", "coding 19"];

console.log(MyArray4);

MyArray4.push("chris");
console.log(MyArray4);

MyArray4.splice(0, 1, "Elvis");
console.log(MyArray4);

MyArray4.pop();
console.log(MyArray4);

// -----------------------------------
