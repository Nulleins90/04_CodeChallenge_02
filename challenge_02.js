/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

// Name und Alter wird erfragt
let person = prompt("Name?");
let age = parseInt(prompt("Alter?"));
let beverage;

// Was trinkt die Person
switch (true) {
    case age < 0:
        beverage = "nichts";
        break;
    case age <= 5:
        beverage = "Milch";
        break;
    case age <= 12:
        beverage = "Saft";
        break;
    case age <= 17:
        beverage = "Cola";
        break;
    case age >= 18:
        beverage = "Wein";
        break;
    default:
        beverage = "nichts"
        break;
}

// Aussage

console.log(person + " trinkt " + beverage + ".");