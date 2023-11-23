/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// const num1 = parseInt(prompt("Inserisci numero 1"));
// const num2 = parseInt(prompt("Inserisci numero 2"));
// const win = document.getElementById("win");

// const userNum1 = document.querySelector(".num1");
// const userNum2 = document.querySelector(".num2");
// userNum1.innerHTML = "User1 ha scelto: " + num1;
// userNum2.innerHTML = "User2 ha scelto: " + num2;

// if (num1 > num2) {
//     console.log(num1);
//     win.innerHTML = "Vince il numero: " + num1;
// }
// else if (num2 > num1) {
//     console.log(num2);
//     win.innerHTML = "Vince il numero: " + num2;
// }
// else{
//     console.log("Vince lo sport!");
//     win.innerHTML = "Vince lo sport!";
// }


/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// const string1 = prompt("Inserisci stringa");
// const string2 = prompt("Inserisci stringa");
// let stringMin = "Sono uguali";
// if (string2.length < string1.length) {
//     stringMin = string2;
// }
// else if(string2.length > string1.length){
//     stringMin = string1;
// }
// console.log(stringMin);


// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// let count = 0;
// let userNum;
// const sum = document.querySelector(".sum");
// for(let i = 0; i < 5; i++){
//     userNum = parseInt(prompt("Inserisci Numero: "));
//     count += userNum;

// }
// console.log(count);
// sum.append(count);


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
let array = [];

for(let i = 0; i <= 5; i++){
    const userNum = parseInt(prompt("Inserisci Numero: "));
    if(userNum % 2){
        array.push(userNum);
    }
}
console.log(array);







