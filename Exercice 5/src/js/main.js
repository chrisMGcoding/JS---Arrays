// exo 1
myVar = "une variable";
let tabExo = ["trop cool", myVar, 7, 59, true];
console.log(tabExo);

// exo 2
console.log(tabExo.length);

// exo 3
tabExo.pop();
console.log(tabExo);

// exo 4
tabExo.shift();
console.log(tabExo);

// exo 5
tabExo.push("ajout 1");
tabExo.unshift("ajout 2");
console.log(tabExo);

// exo 6
tabExo.unshift("ajout 3");
tabExo.unshift("ajout 4");
tabExo.unshift("ajout 5");
console.log(tabExo);

// exo 7
console.log(tabExo.reverse());

//exo 8
let boite = [];
boite.push("crabe", "aquarium");
alert(boite);
boite.unshift("confiture");
alert(boite);
boite.push("crevette", "feuille", "baguettes");
alert(boite);

boite.splice(0,3);

boite.unshift("pantalon");
alert(boite.length);

boite.pop();
boite.pop();
boite.shift();
boite.shift();
alert(boite);
